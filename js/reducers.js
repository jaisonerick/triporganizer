import auth from 'triporganizer/auth/auth';
import { trips, upcomingTrips, loadingTrips } from 'triporganizer/trip/trip';
import { currentUser } from 'triporganizer/redux/user';
import { isConnected } from 'triporganizer/redux/internet';
import { nav } from 'triporganizer/redux/nav';

export default {
  auth,
  currentUser,
  isConnected,
  nav,

  trips,
  loadingTrips,
  upcomingTrips,
};
