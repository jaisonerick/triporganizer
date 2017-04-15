import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Colors from 'triporganizer/components/Colors';
import OptionalText from 'triporganizer/components/OptionalText';
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
    flex: 1,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EBEBEB',
  },
  confirmationTitle: {
  },
  confirmationValue: {
    color: '#333',
  },
});

export default class FlightDetails extends Component {
  render() {
    const { item } = this.props;
    const { details } = item;

    return (
      <View style={{ flex: 1 }}>
        <View style={styles.blankBox}>
          <Text style={styles.mainTitle}>{`${details.company_name} - ${details.flight_number}`}</Text>
          <Text style={styles.company}>{`Operado por ${details.company_name}`}</Text>

          <Text style={styles.destinations}>{`${details.from} - ${details.to}`}</Text>
        </View>

        <View style={styles.detailsBox}>
          <View style={styles.detailsRow}>
            <View style={[styles.detailsItem, { flex: 2 }]}>
              <Text style={styles.detailTitle}>Partida</Text>
              <Text style={styles.detailValue}>{details.departure_date}</Text>
            </View>

            <View style={styles.detailsItem}>
              <Text style={styles.detailTitle}>Terminal</Text>
              <OptionalText style={styles.detailValue} value={details.departure_platform} />
            </View>

            <View style={styles.detailsItem}>
              <Text style={styles.detailTitle}>Portão</Text>
              <OptionalText style={styles.detailValue} value={details.departure_gate} />
            </View>
          </View>

          <View style={styles.detailsRow}>
            <View style={[styles.detailsItem, {flex: 2}]}>
              <Text style={styles.detailTitle}>Chegada</Text>
              <Text style={styles.detailValue}>{details.arrival_date}</Text>
            </View>

            <View style={styles.detailsItem}>
              <Text style={styles.detailTitle}>Terminal</Text>
              <OptionalText style={styles.detailValue} value={details.arrival_platform} />
            </View>

            <View style={styles.detailsItem}>
              <Text style={styles.detailTitle}>Portão</Text>
              <OptionalText style={styles.detailValue} value={details.arrival_gate} />
            </View>
          </View>
        </View>
        {
          !OptionalText.isEmpty(details.seat) &&
          <View style={styles.confirmation}>
            <Text style={[styles.detailTitle, styles.confirmationTitle]}>Poltrona</Text>
            <Text style={[styles.detailValue, styles.confirmationValue]}>{details.seat}</Text>
          </View>
        }

        {
          !OptionalText.isEmpty(details.confirmation_number) &&
          <View style={styles.confirmation}>
            <Text style={[styles.detailTitle, styles.confirmationTitle]}>Número de Confirmação</Text>
            <Text style={[styles.detailValue, styles.confirmationValue]}>{details.confirmation_number}</Text>
          </View>
        }
      </View>
    );
  }
}
