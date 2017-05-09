import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Colors from 'triporganizer/components/Colors';
import Day from './itinerary/Day';

export default class Itinerary extends Component {
  render() {
    const { trip, navigation } = this.props;

    return (
      <View style={{ flex: 1 }}>
        {
          trip.trip_dates.map((date) => (
            <Day date={date.date} key={date.date} appointments={date.appointments} navigation={navigation} />
          ))
        }
      </View>
    );
  }
}
