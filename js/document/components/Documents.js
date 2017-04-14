import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from 'triporganizer/components/Colors';
import DocumentCard from './DocumentCard';

const styles = StyleSheet.create({
  cards: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default class Documents extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.cards}>
          <DocumentCard type="passport" />
          <DocumentCard type="passport" />
        </View>
        <View style={styles.cards}>
          <DocumentCard type="passport" />
          <DocumentCard type="passport" />
        </View>
        <View style={styles.cards}>
          <DocumentCard type="passport" />
          <DocumentCard type="passport" />
        </View>
      </View>
    );
  }
}
