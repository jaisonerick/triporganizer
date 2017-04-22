import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import TopBar from 'triporganizer/components/TopBar';
import UpcomingTrip from '../components/UpcomingTrip';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default class UpcomingTripApp extends Component {
  goBack() {
    const { goBack } = this.props.navigation;

    goBack();
  }

  render() {
    const { state: { params: { trip } } } = this.props.navigation;

    return (
      <View style={styles.container}>
        <TopBar title={trip.name.toUpperCase()} subtitle={trip.dates.toUpperCase()} menuIcon="md-arrow-back" onMenuPress={() => this.goBack()} />

        <UpcomingTrip navigation={this.props.navigation} trip={trip} />
      </View>
    );
  }
}
