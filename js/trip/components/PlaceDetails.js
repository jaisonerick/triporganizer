import React, { Component } from 'react';
import { Platform, Linking, Image, Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from 'triporganizer/components/Colors';
import OptionalText from 'triporganizer/components/OptionalText';
import Touchable from 'triporganizer/components/Touchable';

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

export default class PlaceDetails extends Component {
  openUrl(url) {
    Linking.openURL(url).catch(err => console.log(err));
  }

  openDirections(details) {
    if(Platform.OS === 'ios') {
      this.openUrl(`http://maps.apple.com?daddr=${details.latitude},${details.longitude}`);
    } else {
      this.openUrl(`google.navigation:q=${details.latitude},${details.longitude}`);
    }
  }

  render() {
    const { item } = this.props;
    const { details } = item;

    return (
      <View style={{ flex: 1 }}>
        <View style={{flex: 1, height: 200}}>
          <Image source={{uri: details.image}} resizeMode="cover" style={{flex: 1}} />
        </View>

        <View style={styles.info}>
          <Icon name="ios-bulb" color="#686868" size={30} style={styles.infoIcon} />
          <View style={styles.infoBody}>
            <Text style={styles.infoTitle}>Informações</Text>
            <Text style={styles.infoValue}>{details.long_description}</Text>
          </View>
        </View>

        <View style={styles.info}>
          <Icon name="ios-navigate" color="#686868" size={30} style={styles.infoIcon} />
          <Touchable style={styles.infoBody} onPress={() => this.openDirections(details)}>
            <View style={styles.infoBody}>
              <Text style={styles.infoTitle}>Endereço</Text>
              <Text style={styles.infoValue}>{details.address}</Text>
            </View>
          </Touchable>
        </View>

        <View style={styles.info}>
          <Icon name="md-call" color="#686868" size={30} style={styles.infoIcon} />
          <Touchable style={styles.infoBody} onPress={() => this.openUrl(`tel://${details.phone}`)}>
            <View style={styles.infoBody}>
              <Text style={styles.infoTitle}>Telefone</Text>
              <Text style={styles.infoValue}>{details.phone}</Text>
            </View>
          </Touchable>
        </View>

        <View style={styles.info}>
          <Icon name="md-at" color="#686868" size={30} style={styles.infoIcon} />
          <Touchable style={styles.infoBody} onPress={() => this.openUrl(details.site)}>
            <View style={styles.infoBody}>
              <Text style={styles.infoTitle}>Site</Text>
              <Text style={styles.infoValue}>{details.site}</Text>
            </View>
          </Touchable>
        </View>
      </View>
    );
  }
}
