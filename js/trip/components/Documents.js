import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import R from 'ramda';
import Colors from 'triporganizer/components/Colors';
import DocumentCard from './DocumentCard';

const styles = StyleSheet.create({
  cards: {
    flex: 1,
    flexDirection: 'row',
  },
  emptyView: {
    flex: 1,
  },
});

export default class Documents extends Component {
  getDocumentPairs() {
    return R.splitEvery(2, this.props.documents).map((pair) => (
      pair.length < 2 ? [...pair, { empty: true, key: '-' }] : pair
    ));
  }

  render() {
    const { navigation } = this.props;

    console.log(this.props.documents);

    return (
      <View style={{ flex: 1 }}>
        {
          this.getDocumentPairs().map((pair) => (
            <View style={styles.cards} key={pair.map((document) => document.key).join('-')}>
              {
                pair.map((document) => (
                  document.empty ?
                    <View key={document.key} style={styles.emptyView} /> :
                    <DocumentCard key={document.key} document={document} navigation={navigation} />
                ))
              }
            </View>
          ))
        }
      </View>
    );
  }
}
