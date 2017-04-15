import { handleActions, combineReducers, createThunkAction } from "triporganizer/lib/redux";
import { TripsApi } from 'triporganizer/services';
import { LOGOUT } from 'triporganizer/auth/auth';
import { storeTrips, getTrips } from 'triporganizer/lib/storage';

const LOAD_TRIPS = 'triporganizer/trip/LOAD_TRIPS';

export const loadTrips = createThunkAction(LOAD_TRIPS, function() {
  return async function(dispatch, getState) {
    try {
      const { isConnected } = getState();

      if(isConnected) {
        let trips = await TripsApi.list();
        await storeTrips(trips);
      }

      return getTrips();
    } catch (error) { }
  };
});


// Reducers
const trips = handleActions({
  [LOAD_TRIPS]: { next: (state, { payload }) => payload },
  [LOGOUT]: { next: (state, { payload }) => null },
}, []);

export default combineReducers({
  trips,
});


