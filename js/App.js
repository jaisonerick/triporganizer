import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import AppNavigator from './AppNavigator';
import LoginApp from 'triporganizer/auth/containers/LoginApp';

const mapStateToProps = (state, props) => ({
  isLoggedIn: state.auth.isLoggedIn,
  nav: state.nav,
});

@connect(mapStateToProps)
export default class App extends Component {
  render() {
    if(this.props.isLoggedIn) {
      return <AppNavigator style={{ flex: 1 }} navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
      })} />
    } else {
      return <LoginApp />
    }
  }
}
