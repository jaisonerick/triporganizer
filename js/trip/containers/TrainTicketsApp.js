import React, { Component } from 'react';
import { connect } from 'react-redux';
import TrainTickets from '../components/TrainTickets';
import { getTrainTickets } from '../selectors';

const mapStateToProps = (state, props) => ({
  trainTickets: getTrainTickets(state, props),
});

@connect(mapStateToProps)
export default class TrainTicketsViewApp extends Component {
  render() {
    const { trainTickets } = this.props;

    return (
      <TrainTickets trainTickets={trainTickets} navigation={this.props.navigation} />
    );
  }
}
