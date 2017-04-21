import React, { Component } from 'react';
import { connect } from 'react-redux';
import Reservations from '../components/Reservations';
import { getReservations } from '../selectors';

const mapStateToProps = (state, props) => ({
  reservations: getReservations(state, props),
});

@connect(mapStateToProps)
export default class ReservationsApp extends Component {
  render() {
    const { reservations } = this.props;

    console.log(reservations);

    return (
      <Reservations reservations={reservations} navigation={this.props.navigation} />
    );
  }
}
