import { createSelector } from 'reselect';

import R from 'ramda';

export const getTrip = (state, props) => props.trip

export const getTripAppointments = createSelector(
  getTrip,
  (trip) => R.flatten(trip.trip_dates.map(date => date.appointments))
);

export const getAirTickets = createSelector(
  getTripAppointments,
  (appointments) => R.filter(appointment => appointment.type === 'FlightAppointment')(appointments)
);

export const getReservations = createSelector(
  getTripAppointments,
  (appointments) => R.filter(appointment => appointment.type === 'HotelAppointment')(appointments)
);

export const getDocumentList = createSelector(
  getTrip,
  getAirTickets,
  getReservations,
  (trip, airTickets, reservations) => R.reject(R.isNil)([...trip.documents, airTicketDocument(airTickets, trip), reservationDocument(reservations, trip)])
);

const airTicketDocument = (airTickets, trip) => (
  airTickets.length === 0 ? null : {
    key: 'airticket',
    type: 'airticket',
    title: 'Passagens Aéreas',
    trip: trip
  }
);

const reservationDocument = (reservations, trip) => (
  reservations.length === 0 ? null : {
    key: 'reservation',
    type: 'reservation',
    title: 'Hospedagem',
    trip: trip
  }
);
