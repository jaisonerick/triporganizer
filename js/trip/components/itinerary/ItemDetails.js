import React, { Component } from 'react';
import Flight from './items/Flight';
import Hotel from './items/Hotel';
import Train from './items/Train';
import Bus from './items/Bus';
import Visit from './items/Visit';

const TYPES = {
  'FlightAppointment': Flight,
  'HotelAppointment': Hotel,
  'TrainAppointment': Train,
  'VisitAppointment': Visit,
  'SuggestionAppointment': Visit,
  'BusAppointment': Bus,
}

export default class ItemDetails extends Component {
  render() {
    const { appointment, details, type, navigation } = this.props;
    const Type = TYPES[type];

    if(!Type) {
      return null;
    }

    return (
      <Type appointment={appointment} details={details} navigation={navigation} />
    );
  }
}
