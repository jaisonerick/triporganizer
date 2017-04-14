import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Colors from 'triporganizer/components/Colors';
import Day from './itinerary/Day';

const styles = StyleSheet.create({
  blankBox: {
    paddingTop: 20,
    paddingBottom: 16,
    paddingHorizontal: 16,
  },
  mainTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  company: {
    fontSize: 12,
    color: '#999'
  },
  destinations: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: '#333',
  },
  detailsBox: {
    backgroundColor: '#F4F3F4',
    borderWidth: 1,
    borderColor: '#EFEEEF',
    padding: 16,
  },
  detailTitle: {
    fontSize: 12,
    color: '#9E9E9E',
    marginBottom: 3,
  },
  detailValue: {
    fontSize: 14,
    color: '#636363',
  },
  detailsRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  detailsItem: {
    flex: 1,
  },
  confirmation: {
    padding: 16,
  },
  confirmationTitle: {
  },
  confirmationValue: {
    color: '#333',
  },
});

export default class FlightDetails extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.blankBox}>
          <Text style={styles.mainTitle}>Avianca Brazil (O6) 6318</Text>
          <Text style={styles.company}>Operado por Avianca Brazil</Text>

          <Text style={styles.destinations}>FLN - XAP</Text>
        </View>

        <View style={styles.detailsBox}>
          <View style={styles.detailsRow}>
            <View style={[styles.detailsItem, { flex: 2 }]}>
              <Text style={styles.detailTitle}>Partida</Text>
              <Text style={styles.detailValue}>21 de Set 23:40</Text>
            </View>

            <View style={styles.detailsItem}>
              <Text style={styles.detailTitle}>Terminal</Text>
              <Text style={styles.detailValue}>-</Text>
            </View>

            <View style={styles.detailsItem}>
              <Text style={styles.detailTitle}>Portão</Text>
              <Text style={styles.detailValue}>-</Text>
            </View>
          </View>

          <View style={styles.detailsRow}>
            <View style={[styles.detailsItem, {flex: 2}]}>
              <Text style={styles.detailTitle}>Chegada</Text>
              <Text style={styles.detailValue}>21 de Set 23:40</Text>
            </View>

            <View style={styles.detailsItem}>
              <Text style={styles.detailTitle}>Terminal</Text>
              <Text style={styles.detailValue}>-</Text>
            </View>

            <View style={styles.detailsItem}>
              <Text style={styles.detailTitle}>Portão</Text>
              <Text style={styles.detailValue}>-</Text>
            </View>
          </View>

          <View style={[styles.detailsRow, {marginBottom: 0}]}>
            <View style={[styles.detailsItem, {flex: 2}]}>
              <Text style={styles.detailTitle}>Duração do Voo</Text>
              <Text style={styles.detailValue}>1h e 5 min</Text>
            </View>
          </View>
        </View>

        <View style={styles.confirmation}>
          <Text style={[styles.detailTitle, styles.confirmationTitle]}>Número de Confirmação</Text>
          <Text style={[styles.detailValue, styles.confirmationValue]}>39GJU</Text>
        </View>
      </View>
    );
  }
}
