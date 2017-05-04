import Mixpanel from 'react-native-mixpanel';
import { createAction, handleActions, createThunkAction } from "triporganizer/lib/redux";

import { UserApi } from "triporganizer/services";
import { LOGOUT } from 'triporganizer/auth/auth';

export const REFRESH_CURRENT_USER = "triporganizer/user/REFRESH_CURRENT_USER";
export const refreshCurrentUser = createThunkAction(REFRESH_CURRENT_USER, function() {
  return async function(dispatch, getState) {
    try {
      const user = await UserApi.current();
      Mixpanel.createAlias(user.email)
      Mixpanel.identify(user.email);
      Mixpanel.setOnce({"$email": user.email, "$name": user.name});
      return user;
    } catch (e) {
      return null;
    }
  }
});

export const currentUser = handleActions({
  [REFRESH_CURRENT_USER]: { next: (state, { payload }) => payload },
  [LOGOUT]: { next: (state, { payload }) => {} },
}, {});
