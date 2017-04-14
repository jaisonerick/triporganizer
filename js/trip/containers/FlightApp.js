import React, { Component } from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import Colors from 'triporganizer/components/Colors';
import TopBar from 'triporganizer/components/TopBar';
import FlightDetails from '../components/FlightDetails';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    alignItems: 'stretch',
  },
});

export default class FlightApp extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <TopBar menuIcon="md-arrow-back" title="FLN - CHAPECÓ" />

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.container}
        >
          <FlightDetails />
        </ScrollView>
      </View>
    );
  }
}
