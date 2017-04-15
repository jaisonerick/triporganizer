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

export default class Hotel extends Component {
  render() {
    const { details, navigation, appointment } = this.props;

    return (
      <WithDetails navigation={navigation} screen='HotelDetails' item={appointment}>
        <Text style={styles.title}>{ details.name }</Text>
        <View>
          {
            !OptionalText.isEmpty(details.room) &&
            <Text style={styles.item}><Text>Quarto</Text> <Text style={styles.strong}>{ details.room }</Text></Text>
          }
        </View>
      </WithDetails>
    );
  }
}
