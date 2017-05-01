import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from 'triporganizer/components/Colors';
import OptionalText from 'triporganizer/components/OptionalText';
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

export default class Bus extends Component {
  render() {
    const { details, navigation, appointment } = this.props;

    return (
      <WithDetails navigation={navigation} screen='BusDetails' item={appointment}>
        <Text style={styles.title}>{ `${details.title}` }</Text>
        <View>
          {
            !OptionalText.isEmpty(details.arrival) &&
            <Text style={styles.item}><Text>Chegada:</Text> <Text style={styles.strong}>{ details.arrival }</Text></Text>
          }

          {
            !OptionalText.isEmpty(details.description) &&
            <Text style={styles.item}>{ details.description }</Text>
          }
        </View>
      </WithDetails>
    );
  }
}
