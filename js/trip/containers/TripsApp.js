import React, { Component } from 'react';
import { Text, ScrollView, View, StyleSheet } from 'react-native';
import Colors from 'triporganizer/components/Colors';
import TripCard from '../components/TripCard';

export default class TripsApp extends Component {
  onPress(trip) {
    const { navigate } = this.props.navigation;

    if(trip.upcoming) {
      navigate('UpcomingTrip', { trip: trip });
    } else {
      navigate('Trip', { trip: trip });
    }
  }

  renderTrip(trip) {
    return (
      <TripCard
        key={trip.id}
        image={{uri: trip.image}}
        title={trip.name}
        subtitle={trip.dates}
        body={trip.description}
        onPress={() => this.onPress(trip)}
      />
    );
  }

  renderLoading() {
    return <Text style={styles.loadingText}>Carregando...</Text>
  }

  render() {
    const { trips } = this.props;

    return (
      <View style={styles.scrollView}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.container}
        >
          { trips.map((trip) => this.renderTrip(trip)) }

          { trips.length === 0 && this.renderLoading() }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: Colors.canvas,
  },
  container: {
    alignItems: 'stretch',
    padding: 4,
  },
  loadingText: {
    fontSize: 20,
    padding: 16,
    textAlign: 'center',
  },
});
