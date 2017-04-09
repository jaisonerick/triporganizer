import React, { Component } from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import { View, Text } from 'react-native';
import TopBar from 'triporganizer/components/TopBar';
import Colors from 'triporganizer/components/Colors';

import TripsApp from 'triporganizer/trip/containers/TripsApp';
import DocumentsApp from 'triporganizer/document/containers/DocumentsApp';

export default class MainApp extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <TopBar title="Trip Organizer" />

        <ScrollableTabView
          prerenderingSiblingsNumber={Infinity}
          tabBarBackgroundColor={Colors.primary}
          tabBarActiveTextColor='white'
          tabBarInactiveTextColor='white'
          tabBarUnderlineStyle={{ backgroundColor: Colors.secondary }}
        >
          <TripsApp tabLabel="MINHAS VIAGENS" />
          <DocumentsApp tabLabel="MEUS DOCUMENTOS" />
        </ScrollableTabView>
      </View>
    );
  }
}
