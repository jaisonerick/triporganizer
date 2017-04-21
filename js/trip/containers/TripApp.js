import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Colors from 'triporganizer/components/Colors';
import TopBar from 'triporganizer/components/TopBar';

import ItineraryApp from './ItineraryApp';
import DocumentsApp from './DocumentsApp';

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 20,
    color: Colors.white,
  },
  subtitle: {
    fontSize: 12,
    marginTop: 3,
    color: Colors.white,
  }
});

export default class TripApp extends Component {
  goBack() {
    const { goBack } = this.props.navigation;

    goBack();
  }

  render() {
    const { state: { params: { trip } } } = this.props.navigation;

    return (
      <View style={{flex: 1}}>
        <TopBar title={trip.name.toUpperCase()} subtitle={trip.dates.toUpperCase()} menuIcon="md-arrow-back" onMenuPress={() => this.goBack()} />

        <ScrollableTabView
          prerenderingSiblingsNumber={Infinity}
          tabBarBackgroundColor={Colors.primary}
          tabBarActiveTextColor='white'
          tabBarInactiveTextColor='white'
          tabBarUnderlineStyle={{ backgroundColor: Colors.secondary }}
        >
          <ItineraryApp tabLabel="ROTEIRO" trip={trip} navigation={this.props.navigation} />
          <DocumentsApp tabLabel="DOCUMENTOS" trip={trip} navigation={this.props.navigation} />
        </ScrollableTabView>
      </View>
    );
  }
}
