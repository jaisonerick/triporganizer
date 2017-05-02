import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RefreshControl, Text, ScrollView, View, StyleSheet } from 'react-native';
import Colors from 'triporganizer/components/Colors';
import TripCard from '../components/TripCard';

import { loadTripsRemotely } from "triporganizer/trip/trip";

const mapStateToProps = (state, props) => ({
  loading: state.loadingTrips,
})

const mapDispatchToProps = ({
  loadTripsRemotely,
})


@connect(mapStateToProps, mapDispatchToProps)
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
        sponsors={trip.sponsors}
        onPress={() => this.onPress(trip)}
      />
    );
  }

  renderTrips(trips) {
    if(!trips || trips.length === 0) {
      return null;
    }
    return trips.map((trip) => this.renderTrip(trip));
  }

  renderEmptyState(trips) {
    if(!trips || trips.length > 0) {
      return null;
    }

    return <Text style={styles.loadingText}>Nenhuma viagem encontrada.</Text>
  }

  renderRefreshControl() {
    return <RefreshControl
      refreshing={this.props.loading}
      onRefresh={() => this.props.loadTripsRemotely()}
    />
  }

  render() {
    const { trips } = this.props;

    return (
      <View style={styles.scrollView}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.container}
          refreshControl={this.renderRefreshControl()}
        >
          { this.renderTrips(trips) }
          { this.renderEmptyState(trips) }

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
