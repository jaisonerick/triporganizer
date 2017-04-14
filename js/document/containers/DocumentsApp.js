import React, { Component } from 'react';
import { RefreshControl, ScrollView, View, StyleSheet } from 'react-native';
import Colors from 'triporganizer/components/Colors';
import Documents from '../components/Documents';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: Colors.canvas,
  },
  container: {
    alignItems: 'stretch',
  },
});

export default class DocumentsApp extends Component {
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
          <Documents />
        </ScrollView>
      </View>
    );
  }
}
