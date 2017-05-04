import { createAction, handleActions, createThunkAction } from "triporganizer/lib/redux";
import AppNavigator from 'triporganizer/AppNavigator';

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Main'));

export const nav = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);

  return nextState || state;
};
