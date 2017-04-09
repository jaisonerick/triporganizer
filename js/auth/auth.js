import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

// Reducers
const isLoggedIn = handleActions({
  ["AUTH_LOGIN"]: { next: (state, { payload }) => payload ? payload : null }
}, false);

export default combineReducers({
  isLoggedIn,
});
