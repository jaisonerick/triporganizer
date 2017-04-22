import React, { Component } from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import Colors from 'triporganizer/components/Colors';
import TopBar from 'triporganizer/components/TopBar';
import TrainDetails from '../components/TrainDetails';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: {
    alignItems: 'stretch',
  },
});

export default class TrainApp extends Component {
  goBack() {
    const { goBack } = this.props.navigation;

    goBack();
  }

  render() {
    const { navigation } = this.props;
    const { state: { params: { item } } } = this.props.navigation;

    return (
      <View style={{flex: 1}}>
        <TopBar menuIcon="md-arrow-back" subtitle={`Origem: ${item.details.from}`} title={`Destino: ${item.details.to}`} onMenuPress={() => this.goBack()} />

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.container}
        >
          <TrainDetails item={item} />
        </ScrollView>
      </View>
    );
  }
}
