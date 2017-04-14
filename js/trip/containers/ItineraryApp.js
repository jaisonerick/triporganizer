import React, { Component } from 'react';
import { RefreshControl, ScrollView, View, StyleSheet } from 'react-native';
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
  onRefresh() {
  }

  renderRefreshControl() {
    return <RefreshControl refreshing={false} onRefresh={this.onRefresh} />;
  }

  render() {
    return (
      <View style={styles.scrollView}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.container}
          refreshControl={this.renderRefreshControl()}
        >
          <Itinerary />
        </ScrollView>
      </View>
    );
  }
}
