import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Colors from 'triporganizer/components/Colors';
import MainItem from './MainItem';
import MarkerItem from './MarkerItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: Colors.primaryLight,
    paddingVertical: 8,
    paddingRight: 16,
    paddingLeft: 70,
  },
  headerText: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },

  content: {
    paddingTop: 17,
  }
});

export default class Day extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Segunda feira - 7 de agosto</Text>
        </View>

        <View style={styles.content}>
          <MainItem past />
          <MarkerItem past />
          <MarkerItem past />
          <MarkerItem />
          <MarkerItem />
          <MainItem />
          <MainItem />
          <MainItem />
          <MainItem last />
        </View>
      </View>
    );
  }
}
