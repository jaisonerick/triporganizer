import React, { Component } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import TopBar from 'triporganizer/components/TopBar';
import AirTicketsApp from './AirTicketsApp';
import Colors from 'triporganizer/components/Colors';

export default class AirTicketsViewApp extends Component {
  goBack() {
    const { goBack } = this.props.navigation;

    goBack();
  }

  render() {
    const { state: { params: { document } } } = this.props.navigation;

    return (
      <View style={styles.scrollView}>
        <TopBar menuIcon="md-arrow-back" title={document.title} onMenuPress={() => this.goBack()} />

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.container}
        >
          <AirTicketsApp trip={document.trip} navigation={this.props.navigation} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
  },
  scrollView: {
    flex: 1,
    backgroundColor: Colors.white,
  }
});
