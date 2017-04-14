import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Colors from 'triporganizer/components/Colors';
import TopBar from 'triporganizer/components/TopBar';

import ItineraryApp from './ItineraryApp';
import DocumentsApp from 'triporganizer/document/containers/DocumentsApp';

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
  render() {
    return (
      <View style={{flex: 1}}>
        <TopBar menuIcon="md-arrow-back">
          <Text style={styles.title}>{"Missão Tripmobility 2017".toUpperCase()}</Text>
          <Text style={styles.subtitle}>{"17 a 24 de junho".toUpperCase()}</Text>
        </TopBar>

        <ScrollableTabView
          prerenderingSiblingsNumber={Infinity}
          tabBarBackgroundColor={Colors.primary}
          tabBarActiveTextColor='white'
          tabBarInactiveTextColor='white'
          tabBarUnderlineStyle={{ backgroundColor: Colors.secondary }}
        >
          <ItineraryApp tabLabel="ROTEIRO" />
          <DocumentsApp tabLabel="DOCUMENTOS" />
        </ScrollableTabView>
      </View>
    );
  }
}
