import { handleActions, combineReducers, createThunkAction } from "triporganizer/lib/redux";
import { DocumentsApi } from 'triporganizer/services';
import { LOGOUT } from 'triporganizer/auth/auth';
import { storeDocuments, getDocuments } from 'triporganizer/lib/storage';

const LOAD_DOCUMENTS = 'triporganizer/trip/LOAD_DOCUMENTS';

export const loadDocuments = createThunkAction(LOAD_DOCUMENTS, function() {
  return async function(dispatch, getState) {
    try {
      const { isConnected } = getState();

      if(isConnected) {
        let documents = await DocumentsApi.list();
        console.log(documents);
        await storeDocuments(documents);
      }

      return getDocuments();
    } catch (error) { }
  };
});


// Reducers
const documents = handleActions({
  [LOAD_DOCUMENTS]: { next: (state, { payload }) => payload },
  [LOGOUT]: { next: (state, { payload }) => null },
}, []);

export default combineReducers({
  documents,
});


