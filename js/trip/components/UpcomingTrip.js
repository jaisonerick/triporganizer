import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import PDFView from 'react-native-pdf-view';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
});

export default class UpcomingTrip extends Component {
  renderPDF() {
    return (
      <PDFView path={this.state.file} style={{flex: 1}} />
    )
  }

  render() {
    const { trip } = this.props;

    return (
      <View style={styles.container}>
        <PDFView path={trip.promo.replace('file://', '')} style={{flex: 1}} />
      </View>
    );
  }
}
