import React, { Component } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import Card from 'triporganizer/components/Card';
import Colors from 'triporganizer/components/Colors';

const TYPES = {
  passport: { target: 'DocumentView', image: require('../images/passport.png') },
  insurance: { target: 'DocumentView', image: require('../images/lugage.png') },
  airticket: { target: 'AirTicketsView', image: require('../images/airticket.png') },
  trainticket: { target: 'TrainTicketsView', image: require('../images/train.png') },
  reservation: { target: 'ReservationsView', image: require('../images/reservation.png') },
  custom_document: { target: 'DocumentView', image: require('../images/passport.png') },
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
  goToDocument(target) {
    const { navigate } = this.props.navigation;
    const { document } = this.props;

    navigate(target, { document: document });
  }

  render() {
    const { document } = this.props;
    const type = TYPES[document.type];

    console.log(document);

    if(!type) {
      return null;
    }

    return (
      <Card style={styles.card} onPress={() => this.goToDocument(type.target)}>
        <View style={styles.cardMain}>
          <Image source={type.image} />
        </View>

        <View style={styles.cardBody}>
          <Text style={styles.bodyText}>
            {document.title.toUpperCase()}
          </Text>
        </View>
      </Card>
    );
  }
}
