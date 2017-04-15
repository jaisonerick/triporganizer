import { AsyncStorage } from 'react-native';

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

