import React, { Component } from 'react';
import Flight from './items/Flight';
import Hotel from './items/Hotel';
import Train from './items/Train';
import Visit from './items/Visit';

const TYPES = {
  'FlightAppointment': Flight,
  'HotelAppointment': Hotel,
  'TrainAppointment': Train,
  'VisitAppointment': Visit,
}

export default class ItemDetails extends Component {
  render() {
    const { details, type, navigation } = this.props;
    const Type = TYPES[type];

    if(!Type) {
      return null;
    }

    return (
      <Type details={details} navigation={navigation} />
    );
  }
}
