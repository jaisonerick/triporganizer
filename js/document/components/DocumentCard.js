import React, { Component } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import Card from 'triporganizer/components/Card';
import Colors from 'triporganizer/components/Colors';

const TYPES = {
  passport: {
    image: require('../images/passport.png'),
    name: 'Passaporte',
  },
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
  },
  cardMain: {
    flex: 1,
    height: 130,
    backgroundColor: '#90B9C0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardBody: {
    padding: 10,
  },
  bodyText: {
    fontSize: 14,
    lineHeight: 16,
    color: '#4A4A4A',
    fontWeight: 'bold',
  }
});

export default class DocumentCard extends Component {
  render() {
    const type = TYPES[this.props.type];

    return (
      <Card style={styles.card}>
        <View style={styles.cardMain}>
          <Image source={type.image} />
        </View>

        <View style={styles.cardBody}>
          <Text style={styles.bodyText}>
            {type.name.toUpperCase()}
          </Text>
        </View>
      </Card>
    );
  }
}
