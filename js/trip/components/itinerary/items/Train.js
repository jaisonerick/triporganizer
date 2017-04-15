import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
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
    fontSize: 15,
    color: '#555',
    lineHeight: 18,
  },
});

export default class Train extends Component {
  render() {
    const { details, navigation } = this.props;

    return (
      <WithDetails>
        <Text style={styles.title}>{ details.line }</Text>
        <View>
          <Text style={styles.item}><Text>End.:</Text> <Text style={styles.strong}>{ details.address }</Text></Text>
        </View>
      </WithDetails>
    );
  }
}
