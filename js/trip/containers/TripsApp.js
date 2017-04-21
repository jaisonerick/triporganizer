import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RefreshControl, ScrollView, View, StyleSheet } from 'react-native';
import Colors from 'triporganizer/components/Colors';
import TripCard from '../components/TripCard';
import { loadTrips } from '../trip';

const mapStateToProps = (state, props) => ({
  trips: state.trips,
})

const mapDispatchToProps = ({
  loadTrips,
})

@connect(mapStateToProps, mapDispatchToProps)
export default class TripsApp extends Component {
  componentWillMount() {
    this.props.loadTrips();
  }

  onRefresh() {
    this.props.loadTrips();
  }

  renderRefreshControl() {
    return <RefreshControl refreshing={false} onRefresh={() => this.onRefresh} />;
  }

  onPress(trip) {
    const { navigate } = this.props.navigation;

    navigate('Trip', { trip: trip });
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

  render() {
    const { trips } = this.props;

    return (
      <View style={styles.scrollView}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.container}
          refreshControl={this.renderRefreshControl()}
        >
          { trips.map((trip) => this.renderTrip(trip)) }
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
});
