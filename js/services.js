import { GET, PUT, POST, INSECURE_POST, DELETE } from 'triporganizer/lib/api';

export const SessionApi = {
  create: INSECURE_POST('/api/session'),
};

export const UserApi = {
  current: GET('/api/user'),
};

export const TripsApi = {
  list: GET('/api/trips'),
};

export const DocumentsApi = {
  list: GET('/api/documents'),
};
