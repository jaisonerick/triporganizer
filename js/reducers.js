import auth from 'triporganizer/auth/auth';
import trip from 'triporganizer/trip/trip';
import document from 'triporganizer/document/document';
import { currentUser } from 'triporganizer/redux/user';
import { isConnected } from 'triporganizer/redux/internet';

export default {
  auth,
  currentUser,
  isConnected,

  trip,
  document,
};
