import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginApp from 'triporganizer/auth/containers/LoginApp';
import MainApp from 'triporganizer/main/containers/MainApp';
import TripApp from 'triporganizer/trip/containers/TripApp';
import FlightApp from 'triporganizer/trip/containers/FlightApp';
import HotelApp from 'triporganizer/trip/containers/HotelApp';
import DocumentViewApp from 'triporganizer/document/containers/DocumentViewApp';

const mapStateToProps = (state, props) => ({
  isLoggedIn: state => state.auth.isLoggedIn
});

@connect(mapStateToProps)
export default class App extends Component {
  render() {
    if(this.props.isLoggedin) {
      return <MainApp />
    } else {
      return <LoginApp />
    }
  }
}
