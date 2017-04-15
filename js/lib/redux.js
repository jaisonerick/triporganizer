export { combineReducers } from "redux";
export { handleActions, createAction } from "redux-actions";

export function createThunkAction(actionType, actionThunkCreator) {
  function fn(...actionArgs) {
    var thunk = actionThunkCreator(...actionArgs);
    return async function(dispatch, getState) {
      try {
        let payload = await thunk(dispatch, getState);
        dispatch({ type: actionType, payload });
      } catch (error) {
        dispatch({ type: actionType, payload: error, error: true });
        throw error;
      }
    }
  }
  fn.toString = () => actionType;
  return fn;
}
