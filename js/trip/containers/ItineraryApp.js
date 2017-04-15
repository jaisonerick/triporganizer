import React, { Component } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import Colors from 'triporganizer/components/Colors';
import Itinerary from '../components/Itinerary';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    alignItems: 'stretch',
  },
});

export default class ItineraryApp extends Component {
  render() {
    const { trip, navigation } = this.props;

    return (
      <View style={styles.scrollView}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.container}
        >
          <Itinerary trip={trip} navigation={navigation} />
        </ScrollView>
      </View>
    );
  }
}
