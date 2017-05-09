import React, { Component } from 'react';
import { connect } from 'react-redux';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import { View, Text } from 'react-native';
import TopBar from 'triporganizer/components/TopBar';
import Colors from 'triporganizer/components/Colors';

import TripsApp from 'triporganizer/trip/containers/TripsApp';

import { logout } from "triporganizer/auth/auth";
import { loadTrips } from "triporganizer/trip/trip";
import { refreshCurrentUser } from "triporganizer/redux/user";

const mapStateToProps = (state, props) => ({
  trips: state.trips,
  upcomingTrips: state.upcomingTrips,
})

const mapDispatchToProps = ({
  logout,
  loadTrips,
  refreshCurrentUser,
})

@connect(mapStateToProps, mapDispatchToProps)
export default class MainApp extends Component {
  componentWillMount() {
    this.props.refreshCurrentUser();
    this.props.loadTrips();
  }

  render() {
    const { trips, upcomingTrips, logout } = this.props;

    return (
      <View style={{flex: 1}}>
        <TopBar title="TripOrganizer" rightMenuIcon="md-log-out" onRightMenuPress={logout} rightMenuTitle="Sair" />

        <ScrollableTabView
          prerenderingSiblingsNumber={Infinity}
          tabBarBackgroundColor={Colors.primary}
          tabBarActiveTextColor='white'
          tabBarInactiveTextColor='white'
          tabBarUnderlineStyle={{ backgroundColor: Colors.secondary }}
        >
          <TripsApp trips={trips} tabLabel="MINHAS VIAGENS" navigation={this.props.navigation} />
          <TripsApp trips={upcomingTrips} tabLabel="OUTRAS VIAGENS" navigation={this.props.navigation} />
        </ScrollableTabView>
      </View>
    );
  }
}
