import { NetInfo } from 'react-native';
import { createAction, handleActions, createThunkAction } from "triporganizer/lib/redux";

import { UserApi } from "triporganizer/services";

export const REFRESH_INTERNET_STATE = "triporganizer/internet/REFRESH_INTERNET_STATE";

export const internetConnectionChanged = createAction(REFRESH_INTERNET_STATE, (isConnected) => isConnected);

export const listenForInternetState = (store) => {
  NetInfo.isConnected.addEventListener('change', (isConnected) => {
    store.dispatch(internetConnectionChanged(isConnected));
  });
};

export const isConnected = handleActions({
  [REFRESH_INTERNET_STATE]: { next: (state, { payload }) => payload },
}, true);
