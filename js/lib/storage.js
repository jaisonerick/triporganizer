import { Platform, Image, AsyncStorage } from 'react-native';
import RNFetchBlob from 'react-native-fetch-blob'
import moment from 'moment-timezone';

let memoryToken = undefined;

const AUTH_TOKEN = '@TripOrganizer:authToken';

export const setAuthToken = function(token) {
  memoryToken = token;
  return AsyncStorage.setItem(AUTH_TOKEN, token);
}

export const clearAuthToken = function() {
  memoryToken = null;
  return AsyncStorage.removeItem(AUTH_TOKEN);
}

export const getAuthToken = async function() {
  if(memoryToken === undefined) {
    try {
      memoryToken = await AsyncStorage.getItem(AUTH_TOKEN)
    } catch(error) {
      memoryToken = null;
    }
  }
  return memoryToken;
}

const TRIPS = '@TripOrganizer:trips';

const downloadFile = async function(url, ext = 'png') {
  if(!url) {
    return null;
  }

  return await RNFetchBlob
    .config({ fileCache: true, appendExt: 'png' })
    .fetch('GET', url)
    .then((res) => Platform.OS === 'android' ? `file://${res.path()}` : `${res.path()}`)
    .catch(e => console.log(e));
}

const SPONSOR_HEIGHT = 32;

const offlineizeSponsor = async function(sponsor) {
  let image = await downloadFile(sponsor.image);
  let imageSize = await new Promise((resolve, reject) => {
    Image.getSize(image, (width, height) => {
      if(height > SPONSOR_HEIGHT) {
        resolve({
          width: width * SPONSOR_HEIGHT / height,
          height: SPONSOR_HEIGHT,
        });
      } else {
        resolve({
          width: width / (SPONSOR_HEIGHT / height),
          height: SPONSOR_HEIGHT,
        });
      }
    }, reject);
  });

  return {
    ...sponsor,
    image: {
      uri: image,
      ...imageSize,
    }
  };
}

const offlineizeUpcomingTrip = async function(trip) {
  let promo = await downloadFile(trip.promo, 'pdf');
  let image = await downloadFile(trip.image);
  let sponsors = await Promise.all(trip.sponsors.map(offlineizeSponsor));

  return {
    ...trip,
    promo,
    image,
    sponsors,
  };
}

const offlineizeDocument = async function(document) {
  let url = await downloadFile(document.url, document.display_type === 'document' ? 'pdf' : 'png');

  return {
    ...document,
    url,
  };
}

const offlineizeAppointment = async function(appointment) {
  let medium_image = await downloadFile(appointment.medium_image);
  let details = {
    ...appointment.details,
    image: await downloadFile(appointment.details.image),
  }

  return {
    ...appointment,
    medium_image,
    details,
  };
}

const offlineizeTripDate = async function(tripDate) {
  return {
    ...tripDate,
    appointments: await Promise.all(tripDate.appointments.map(offlineizeAppointment))
  }
}

const offlineizeTrip = async function(trip) {
  let image = await downloadFile(trip.image);
  let documents = await Promise.all(trip.documents.map(offlineizeDocument));
  let trip_dates = await Promise.all(trip.trip_dates.map(offlineizeTripDate));
  let sponsors = await Promise.all(trip.sponsors.map(offlineizeSponsor));

  return {
    ...trip,
    image,
    documents,
    trip_dates,
    sponsors,
  };
}

const activateTrip = (trip) => (
  {
    ...trip,
    trip_dates: trip.trip_dates.map(tripDate => ({
      ...tripDate,
      appointments: tripDate.appointments.map(appointment => {
        if(!appointment.datetime) {
          return appointment;
        }
        return {
          ...appointment,
          upcoming: moment(appointment.datetime).diff(moment()) > 0,
        };
      }),
    }))
  }
);

export const storeTrips = async function(payload) {
  try {
    let upcoming = await Promise.all(
      payload.upcoming.map(offlineizeUpcomingTrip)
    );

    let trips = await Promise.all(
      payload.trips.map(offlineizeTrip)
    );

    return await AsyncStorage.setItem(TRIPS, JSON.stringify({
      upcoming,
      trips,
    }));
  } catch(e) { console.log(e); }
};

export const getTrips = function() {
  return AsyncStorage.getItem(TRIPS)
    .then((str) => JSON.parse(str))
    .then((stored) => {
      if(!stored) {
        return {
          upcoming: null,
          trips: null,
        };
      }

      let result = {
        upcoming: stored.upcoming,
        trips: stored.trips && stored.trips.map(trip => activateTrip(trip))
      }
      return result;
    });
}

export const clearTrips = function() {
  return AsyncStorage.removeItem(TRIPS);
}

const DOCUMENTS = '@TripOrganizer:documents';

export const storeDocuments = async function(documents) {
  let savedDocuments = await Promise.all(
    documents.map((document) => (
      RNFetchBlob
        .config({ fileCache: true })
        .fetch('GET', document.url)
        .then((res) => ({ ...document, local_url: res.path() }))
        .then((document) => {
          if(document.display_type === "image") {
            return new Promise((resolve, reject) => {
              Image.getSize(document.url, (width, height) => {
                resolve({ ...document, width, height });
              });
            });
          }
          return document;
        })
    ))
  );

  return await AsyncStorage.setItem(DOCUMENTS, JSON.stringify(savedDocuments));
};

export const getDocuments = function() {
  return AsyncStorage.getItem(DOCUMENTS).then((str) => JSON.parse(str));
}

export const clearDocuments = function() {
  return AsyncStorage.removeItem(DOCUMENTS);
}
