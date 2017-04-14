import React, { Component } from 'react';
import { RefreshControl, ScrollView, View, StyleSheet } from 'react-native';
import Colors from 'triporganizer/components/Colors';
import TripCard from '../components/TripCard';

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

export default class TripsApp extends Component {
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
          <TripCard
            image={{uri: 'http://img.ibxk.com.br/2015/01/16/16140919080595.jpg'}}
            title="Missão TripMobility 2017"
            subtitle="17 a 24 de junho"
            body="Dinamarca + Suécia"
          />

          <TripCard
            image={{uri: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Avenida_Beira_Mar_Norte_Florianopolis.jpg'}}
            title="Urbanismo Florianópolis 2018"
            subtitle="16 de janeiro a 24 de fevereiro de 2017"
            body="Florianópolis"
          />
        </ScrollView>
      </View>
    );
  }
}
