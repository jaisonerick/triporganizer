import { createAction, handleActions, createThunkAction } from "triporganizer/lib/redux";

import { UserApi } from "triporganizer/services";
import { LOGOUT } from 'triporganizer/auth/auth';

export const REFRESH_CURRENT_USER = "triporganizer/user/REFRESH_CURRENT_USER";
export const refreshCurrentUser = createAction(REFRESH_CURRENT_USER, () => {
  try {
    return UserApi.current();
  } catch (e) {
    return null;
  }
});

export const currentUser = handleActions({
  [REFRESH_CURRENT_USER]: { next: (state, { payload }) => payload },
  [LOGOUT]: { next: (state, { payload }) => {} },
}, {});
