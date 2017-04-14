import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from 'triporganizer/components/Colors';
import Day from './itinerary/Day';

export default class Itinerary extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Day />
        <Day />
        <Day />
      </View>
    );
  }
}
