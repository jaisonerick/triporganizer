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
  destination: {
    marginBottom: 30,
  },
  destinationText: {
    fontSize: 30,
    fontWeight: 'bold',
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

export default class BusDetails extends Component {
  render() {
    const { item } = this.props;
    const { details } = item;

    return (
      <View style={{ flex: 1 }}>
        <View style={styles.blankBox}>
          <View style={styles.destination}>
            <Text style={styles.destinationText}>{`${details.from} - ${details.to}`}</Text>
          </View>

          <Text style={styles.company}>{`Operado por ${details.company_name}`}</Text>
        </View>

        <View style={styles.detailsBox}>
          <View style={styles.detailsRow}>
            <View style={styles.detailsItem}>
              <Text style={styles.detailTitle}>Partida</Text>
              <Text style={styles.detailValue}>{details.departure_date}</Text>
            </View>

            <View style={styles.detailsItem}>
              <Text style={styles.detailTitle}>Chegada</Text>
              <Text style={styles.detailValue}>{details.arrival_date}</Text>
            </View>
          </View>

          <View style={[styles.detailsRow, {marginBottom: 0}]}>
            <View style={styles.detailsItem}>
              <Text style={styles.detailTitle}>Duração</Text>
              <OptionalText style={styles.detailValue} value={details.duration} />
            </View>
          </View>
        </View>
        {
          !OptionalText.isEmpty(details.ticket) &&
          <View style={styles.confirmation}>
            <Text style={[styles.detailTitle, styles.confirmationTitle]}>Ticket</Text>
            <Text style={[styles.detailValue, styles.confirmationValue]}>{details.ticket}</Text>
          </View>
        }

        {
          !OptionalText.isEmpty(details.description) &&
          <View style={styles.confirmation}>
            <Text style={[styles.detailTitle, styles.confirmationTitle]}>Informações</Text>
            <Text style={[styles.detailValue, styles.confirmationValue]}>{details.description}</Text>
          </View>
        }
      </View>
    );
  }
}
