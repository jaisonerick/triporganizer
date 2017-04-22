import React, { Component } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import R from 'ramda';
import MainItem from './itinerary/MainItem';
import Colors from 'triporganizer/components/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingTop: 17,
  },
  image: {
    flex: 1,
  },
  header: {
    backgroundColor: Colors.upcomingItem,
    paddingVertical: 8,
    paddingRight: 16,
    paddingLeft: 70,
  },
  headerPast: {
    backgroundColor: Colors.pastItem,
  },
  headerText: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },

});

export default class TrainTickets extends Component {
  render() {
    const { trainTickets, navigation } = this.props;

    const upcoming = R.filter(ticket => ticket.upcoming)(trainTickets);
    const past = R.filter(ticket => !ticket.upcoming)(trainTickets);

    return (
      <View style={styles.container}>
        {
          upcoming.length > 0 &&
          [
            <View key="title" style={styles.header}>
              <Text style={styles.headerText}>POR VIR</Text>
            </View>,
            <View key="content" style={styles.content}>
              {
                upcoming.map((appointment) => (
                  <MainItem
                    key={appointment.id}
                    appointment={appointment}
                    past={!appointment.upcoming}
                    last={true}
                    medium={appointment.date}
                    medium_image={appointment.medium_image}
                    time={appointment.time}
                    details={appointment.details}
                    navigation={navigation}
                    type={appointment.type} />
                ))
              }
            </View>
          ]
        }

        {
          past.length > 0 &&
          [
            <View key="title" style={[styles.header, styles.headerPast]}>
              <Text style={styles.headerText}>PASSADOS</Text>
            </View>,
            <View key="content" style={styles.content}>
              {
                past.map((appointment) => (
                  <MainItem
                    key={appointment.id}
                    appointment={appointment}
                    past={!appointment.upcoming}
                    last={true}
                    medium={appointment.date}
                    medium_image={appointment.medium_image}
                    time={appointment.time}
                    details={appointment.details}
                    navigation={navigation}
                    type={appointment.type} />
                ))
              }
            </View>
          ]
        }
      </View>
    );
  }
}
