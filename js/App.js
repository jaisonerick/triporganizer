import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginApp from 'triporganizer/auth/containers/LoginApp';
import MainApp from 'triporganizer/main/containers/MainApp';

const mapStateToProps = (state, props) => ({
  isLoggedIn: state => state.auth.isLoggedIn
});

@connect(mapStateToProps)
export default class App extends Component {
  render() {
    if(this.props.isLoggedin) {
      return <MainApp />
    } else {
      return <MainApp />
    }
  }
}
