import { handleActions, combineReducers, createThunkAction } from "triporganizer/lib/redux";
import { TripsApi } from 'triporganizer/services';
import { LOGOUT, logout } from 'triporganizer/auth/auth';
import { storeTrips, getTrips } from 'triporganizer/lib/storage';

const LOAD_TRIPS = 'triporganizer/trip/LOAD_TRIPS';

const loadTripsLocally = async function(dispatch, getState) {
  console.log('LOCAL');
  let storedTrips = await getTrips();

  if(storedTrips) {
    dispatch({ type: LOAD_TRIPS, payload: storedTrips });
  }
}

export const loadTrips = function() {
  return async function(dispatch, getState) {
    try {
      await loadTripsLocally(dispatch, getState)

      const { isConnected } = getState();

      if(isConnected) {
        let trips = await TripsApi.list();
        if(trips.status === 401) {
          dispatch(logout());
          return;
        }
        await storeTrips(trips);

        await loadTripsLocally(dispatch, getState)
      }
    } catch (error) { }
  };
};


// Reducers
export const trips = handleActions({
  [LOAD_TRIPS]: { next: (state, { payload }) => payload.trips },
  [LOGOUT]: { next: (state, { payload }) => null },
}, null);

export const upcomingTrips = handleActions({
  [LOAD_TRIPS]: { next: (state, { payload }) => payload.upcoming },
  [LOGOUT]: { next: (state, { payload }) => null },
}, null);

