import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';
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
    padding: 16,
  },
  confirmationTitle: {
  },
  confirmationValue: {
    color: '#333',
  },

  map: {
    ...StyleSheet.absoluteFillObject,
  },

  info: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#EBEBEB',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },

  infoIcon: {
    marginRight: 30,
  },

  infoBody: {
    flex: 1,
  },

  infoTitle: {
    fontSize: 13,
    color: '#9E9E9E',
    marginBottom: 3,
  },
  infoValue: {
    fontSize: 15,
    color: '#444',
  },
});

export default class HotelDetails extends Component {
  render() {
    const { item } = this.props;
    const { details } = item;

    return (
      <View style={{ flex: 1 }}>
        <View style={{flex: 1, height: 200}}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: details.latitude,
              longitude: details.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <MapView.Marker
              coordinate={{ latitude: details.latitude, longitude: details.longitude }}
              title={details.name}
            />
          </MapView>
        </View>

        <View style={styles.detailsBox}>
          <View style={styles.detailsRow}>
            <View style={[styles.detailsItem]}>
              <Text style={styles.detailTitle}>Check in</Text>
              <Text style={styles.detailValue}>{details.checkin_at}</Text>
            </View>

            <View style={styles.detailsItem}>
              <Text style={styles.detailTitle}>Check out</Text>
              <Text style={styles.detailValue}>{details.checkout_at}</Text>
            </View>
          </View>

          <View style={styles.detailsRow}>
            <View style={styles.detailsItem}>
              <Text style={styles.detailTitle}>Duração da Estadia</Text>
              <Text style={styles.detailValue}>{details.stay_time}</Text>
            </View>
          </View>

          {
            !OptionalText.isEmpty(details.confirmation_code) &&
            <View style={[styles.detailsRow, {marginBottom: 0}]}>
              <View style={styles.detailsItem}>
                <Text style={styles.detailTitle}>Código de Confirmação</Text>
                <Text style={styles.detailValue}>{details.confirmation_code}</Text>
              </View>
            </View>
          }
        </View>

        <View style={styles.info}>
          <Icon name="ios-navigate" color="#686868" size={30} style={styles.infoIcon} />
          <View style={styles.infoBody}>
            <Text style={styles.infoTitle}>Endereço</Text>
            <Text style={styles.infoValue}>{details.address}</Text>
          </View>
        </View>

        <View style={styles.info}>
          <Icon name="md-call" color="#686868" size={30} style={styles.infoIcon} />
          <View style={styles.infoBody}>
            <Text style={styles.infoTitle}>Telefone</Text>
            <Text style={styles.infoValue}>{details.phone}</Text>
          </View>
        </View>
      </View>
    );
  }
}
