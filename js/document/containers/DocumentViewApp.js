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
  goBack() {
    const { goBack } = this.props.navigation;

    goBack();
  }

  render() {
    const { state: { params: { document } } } = this.props.navigation;

    return (
      <View style={styles.container}>
        <TopBar menuIcon="md-arrow-back" title={document.title} onMenuPress={() => this.goBack()} />

        <DocumentView navigation={this.props.navigation} document={document} />
      </View>
    );
  }
}
