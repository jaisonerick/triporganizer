import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';

import LoginApp from 'triporganizer/auth/containers/LoginApp';
import MainApp from 'triporganizer/main/containers/MainApp';
import TripApp from 'triporganizer/trip/containers/TripApp';
import FlightApp from 'triporganizer/trip/containers/FlightApp';
import TrainApp from 'triporganizer/trip/containers/TrainApp';
import HotelApp from 'triporganizer/trip/containers/HotelApp';
import PlaceApp from 'triporganizer/trip/containers/PlaceApp';
import DocumentViewApp from 'triporganizer/trip/containers/DocumentViewApp';
import AirTicketsViewApp from 'triporganizer/trip/containers/AirTicketsViewApp';
import ReservationsViewApp from 'triporganizer/trip/containers/ReservationsViewApp';

const mapStateToProps = (state, props) => ({
  isLoggedIn: state.auth.isLoggedIn
});

@connect(mapStateToProps)
export default class App extends Component {
  render() {
    if(this.props.isLoggedIn) {
      const Stack = StackNavigator({
        Main: { screen: MainApp },
        Trip: { screen: TripApp },
        FlightDetails: { screen: FlightApp },
        TrainDetails: { screen: TrainApp },
        HotelDetails: { screen: HotelApp },
        PlaceDetails: { screen: PlaceApp },
        DocumentView: { screen: DocumentViewApp },
        AirTicketsView: { screen: AirTicketsViewApp },
        ReservationsView: { screen: ReservationsViewApp },
      }, {
        headerMode: 'none',
      });

      return <Stack style={{ flex: 1 }} />
    } else {
      return <LoginApp />
    }
  }
}
