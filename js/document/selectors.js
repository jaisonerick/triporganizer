import _ from 'lodash';

export const getDocuments = (state, props) => (
  _.filter(state.document.documents, (document) => (
    !document.trip_id ||
    props.trip && document.trip_id === props.trip.id
  ))
);
