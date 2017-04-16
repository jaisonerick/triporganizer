import { Image, AsyncStorage } from 'react-native';
import RNFetchBlob from 'react-native-fetch-blob'

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

export const storeTrips = async function(trips) {
  return await AsyncStorage.setItem(TRIPS, JSON.stringify(trips));
};

export const getTrips = function() {
  return AsyncStorage.getItem(TRIPS).then((str) => JSON.parse(str));
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

