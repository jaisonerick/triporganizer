import React, { Component } from 'react';
import { Linking, Text, View, StyleSheet } from 'react-native';
import Hyperlink from 'react-native-hyperlink'
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from 'triporganizer/components/Colors';
import WithDetails from './WithDetails';

const styles = StyleSheet.create({
  strong: {
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    lineHeight: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  item: {
    fontSize: 14,
    color: '#555',
    lineHeight: 18,
  },
  linkStyle: {
    color: Colors.primaryDark,
  },
});

export default class Visit extends Component {
  openUrl(url) {
    Linking.openURL(url).catch(err => console.log(err));
  }

  render() {
    const { details, navigation, appointment } = this.props;

    return (
      <WithDetails navigation={navigation} screen='PlaceDetails' item={appointment}>
        <Text style={styles.title}>{ details.name }</Text>
        <Hyperlink
          linkStyle={styles.linkStyle}
          onPress={ url => this.openUrl(url) }>
          <Text style={styles.item}>{ details.description }</Text>
        </Hyperlink>
      </WithDetails>
    );
  }
}
