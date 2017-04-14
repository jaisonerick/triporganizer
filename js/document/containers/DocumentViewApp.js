import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import TopBar from 'triporganizer/components/TopBar';
import DocumentView from '../components/DocumentView';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default class DocumentViewApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TopBar menuIcon="md-arrow-back" title="Passaporte" />

        <DocumentView />
      </View>
    );
  }
}
