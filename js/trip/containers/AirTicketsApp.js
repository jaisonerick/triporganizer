import React, { Component } from 'react';
import { connect } from 'react-redux';
import AirTickets from '../components/AirTickets';
import { getTrip, getAirTickets } from '../selectors';

const mapStateToProps = (state, props) => ({
  airTickets: getAirTickets(state, props),
});

@connect(mapStateToProps)
export default class AirTicketsViewApp extends Component {
  render() {
    const { airTickets } = this.props;

    return (
      <AirTickets airTickets={airTickets} navigation={this.props.navigation} />
    );
  }
}
