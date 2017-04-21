import React, { Component } from 'react';
import { connect } from 'react-redux';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import { View, Text } from 'react-native';
import TopBar from 'triporganizer/components/TopBar';
import Colors from 'triporganizer/components/Colors';

import TripsApp from 'triporganizer/trip/containers/TripsApp';
import DocumentsApp from 'triporganizer/document/containers/DocumentsApp';

import { logout } from "triporganizer/auth/auth";

@connect(null, {logout})
export default class MainApp extends Component {
  render() {
    const { logout } = this.props;

    return (
      <View style={{flex: 1}}>
        <TopBar title="Trip Organizer" rightMenuIcon="md-log-out" onRightMenuPress={logout} rightMenuTitle="Sair" />

        <ScrollableTabView
          prerenderingSiblingsNumber={Infinity}
          tabBarBackgroundColor={Colors.primary}
          tabBarActiveTextColor='white'
          tabBarInactiveTextColor='white'
          tabBarUnderlineStyle={{ backgroundColor: Colors.secondary }}
        >
          <TripsApp tabLabel="MINHAS VIAGENS" navigation={this.props.navigation} />
          <DocumentsApp tabLabel="MEUS DOCUMENTOS" navigation={this.props.navigation} />
        </ScrollableTabView>
      </View>
    );
  }
}
