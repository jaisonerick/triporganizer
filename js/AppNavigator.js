import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import LoginApp from 'triporganizer/auth/containers/LoginApp';
import MainApp from 'triporganizer/main/containers/MainApp';
import TripApp from 'triporganizer/trip/containers/TripApp';
import UpcomingTripApp from 'triporganizer/trip/containers/UpcomingTripApp';
import FlightApp from 'triporganizer/trip/containers/FlightApp';
import TrainApp from 'triporganizer/trip/containers/TrainApp';
import BusApp from 'triporganizer/trip/containers/BusApp';
import HotelApp from 'triporganizer/trip/containers/HotelApp';
import PlaceApp from 'triporganizer/trip/containers/PlaceApp';
import DocumentViewApp from 'triporganizer/trip/containers/DocumentViewApp';
import AirTicketsViewApp from 'triporganizer/trip/containers/AirTicketsViewApp';
import TrainTicketsViewApp from 'triporganizer/trip/containers/TrainTicketsViewApp';
import ReservationsViewApp from 'triporganizer/trip/containers/ReservationsViewApp';

export default AppNavigator = StackNavigator({
  Main: { screen: MainApp },
  Trip: { screen: TripApp },
  UpcomingTrip: { screen: UpcomingTripApp },
  FlightDetails: { screen: FlightApp },
  TrainDetails: { screen: TrainApp },
  BusDetails: { screen: BusApp },
  HotelDetails: { screen: HotelApp },
  PlaceDetails: { screen: PlaceApp },
  DocumentView: { screen: DocumentViewApp },
  AirTicketsView: { screen: AirTicketsViewApp },
  TrainTicketsView: { screen: TrainTicketsViewApp },
  ReservationsView: { screen: ReservationsViewApp },
}, {
  headerMode: 'none',
});
