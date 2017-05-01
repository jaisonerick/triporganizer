import { handleActions, combineReducers, createThunkAction } from "triporganizer/lib/redux";
import { SessionApi } from 'triporganizer/services';
import { setAuthToken, clearAuthToken, clearTrips, clearDocuments } from 'triporganizer/lib/storage';
import { refreshCurrentUser} from 'triporganizer/redux/user';

//login
export const LOGIN = "triporganizer/auth/LOGIN";
export const login = createThunkAction(LOGIN, function(credentials, redirectUrl) {
  return async function(dispatch, getState) {
    try {
      let newSession = await SessionApi.create({ credentials });

      await setAuthToken(newSession.id);

      // MetabaseAnalytics.trackEvent('Auth', 'Login');
      //
      await dispatch(refreshCurrentUser());

      return { success: true };
    } catch (error) {
      return { error: error };
    }
  };
});

export const LOGOUT = "triporganizer/auth/LOGOUT";
export const logout = createThunkAction(LOGOUT, function() {
  return function(dispatch, getState) {
    clearAuthToken();
    clearTrips();
    clearDocuments();
  }
});

// Reducers
const isLoggedIn = handleActions({
  [LOGIN]: { next: (state, { payload: { success } }) => success ?  true : false },
  [LOGOUT]: { next: (state, { payload }) => false }
}, false);

const loginError = handleActions({
  [LOGIN]: { next: (state, { payload: { error } }) => error ? true : false },
}, false);


export default combineReducers({
  loginError,
  isLoggedIn,
});
