import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Colors from 'triporganizer/components/Colors';
import MainItem from './MainItem';
import MarkerItem from './MarkerItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: Colors.primaryLight,
    paddingVertical: 8,
    paddingRight: 16,
    paddingLeft: 70,
  },
  headerText: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },

  content: {
    paddingTop: 17,
  }
});

export default class Day extends Component {
  render() {
    const { date, appointments, navigation } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{ date }</Text>
        </View>

        <View style={styles.content}>
          {
            appointments.map((appointment) => {
              const mainItem = <MainItem
                key={`appointment-${appointment.id}`}
                past={!appointment.upcoming}
                last={appointment.last}
                medium={appointment.medium}
                medium_image={appointment.medium_image}
                time={appointment.time}
                details={appointment.details}
                navigation={navigation}
                type={appointment.type} />

              return [
                mainItem,
                ...appointment.milestones.map((milestone) => {
                  return <MarkerItem key={`mileston-${milestone.id}`} last={milestone.last} description={milestone.description} past={!appointment.upcoming}  />;
                })
              ];
            })
          }
        </View>
      </View>
    );
  }
}
