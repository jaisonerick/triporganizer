import Mixpanel from 'react-native-mixpanel';
import { NavigationActions } from 'react-navigation';

export const analytics = ({ getState }) => next => (action) => {
  if (
    action.type !== NavigationActions.NAVIGATE
    && action.type !== NavigationActions.BACK
  ) {
    return next(action);
  }

  const currentScreen = getCurrentRoute(getState().nav);
  const result = next(action);
  const nextScreen = getCurrentRoute(getState().nav);
  if (nextScreen.routeName !== currentScreen.routeName) {
    const { routeName, params } = nextScreen;

    console.log('ANALYTICS', nextScreen);

    switch(routeName) {
      case 'Trip':
        Mixpanel.trackWithProperties('View Trip', { id: params.trip.id, trip: params.trip.name });
        break;
      case 'UpcomingTrip':
        Mixpanel.trackWithProperties('View Upcoming Trip', { id: params.trip.id, trip: params.trip.name });
        break;
      case 'FlightDetails':
      case 'TrainDetails':
      case 'BusDetails':
      case 'HotelDetails':
      case 'PlaceDetails':
        Mixpanel.trackWithProperties(`View ${routeName}`, {
          id: params.item.id,
          date: params.item.date,
          time: params.item.time,
        });
        break;
      case 'DocumentView':
        Mixpanel.trackWithProperties(`View ${routeName}`, {
          key: params.document.key,
          title: params.document.title,
        });
        break;
      default:
        Mixpanel.track(`View ${routeName}`);
    }
  }
  return result;
};

function getCurrentRoute(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) {
    return getCurrentRouteName(route);
  }
  return route;
}
