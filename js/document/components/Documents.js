import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import _ from 'lodash';
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
    const { documents } = this.props;

    return (
      <View style={{ flex: 1 }}>
        {
          _.chunk(documents, 2).map((pair) => (
            <View style={styles.cards} key={pair.map((document) => document.key).join('-')}>
              {
                pair.map((document) => <DocumentCard key={document.key} document={document} />)
              }
            </View>
          ))
        }
      </View>
    );
  }
}
