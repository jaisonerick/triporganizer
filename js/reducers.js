import auth from 'triporganizer/auth/auth';
import { trips, upcomingTrips, loadingTrips } from 'triporganizer/trip/trip';
import { currentUser } from 'triporganizer/redux/user';
import { isConnected } from 'triporganizer/redux/internet';

export default {
  auth,
  currentUser,
  isConnected,

  trips,
  loadingTrips,
  upcomingTrips,
};
