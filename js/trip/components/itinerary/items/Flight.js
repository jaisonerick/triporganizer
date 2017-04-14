import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Colors from 'triporganizer/components/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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

export default class Flight extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>FLN - SAO</Text>
        <View>
          <Text style={styles.item}><Text>Voo:</Text> <Text style={styles.strong}>1234</Text></Text>
          <Text style={styles.item}><Text>Portão:</Text> <Text style={styles.strong}>1234</Text></Text>
          <Text style={styles.item}><Text>Chegada:</Text> <Text style={styles.strong}>1234</Text></Text>
          <Text style={styles.item}><Text style={styles.strong}>Detalhes</Text></Text>
        </View>
      </View>
    );
  }
}
