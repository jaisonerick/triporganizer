import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';

import LoginApp from 'triporganizer/auth/containers/LoginApp';
import MainApp from 'triporganizer/main/containers/MainApp';
import TripApp from 'triporganizer/trip/containers/TripApp';
import FlightApp from 'triporganizer/trip/containers/FlightApp';
import HotelApp from 'triporganizer/trip/containers/HotelApp';
import DocumentViewApp from 'triporganizer/document/containers/DocumentViewApp';

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
        HotelDetails: { screen: HotelApp },
        DocumentView: { screen: DocumentViewApp },
      }, {
        headerMode: 'none',
      });

      return <Stack style={{ flex: 1 }} />
    } else {
      return <LoginApp />
    }
  }
}
