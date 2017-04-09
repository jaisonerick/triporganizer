import React, { Component } from 'react';
import moment from 'moment';
import momentLocale from 'moment/locale/pt-br';
import { Provider } from 'react-redux';
import reducers from './reducers';

import App from './App';
import { getStore } from './store';

export default function setup() {
  const store = getStore(reducers, {});

  moment.locale('pt-br', momentLocale);

  class Root extends Component {
    render() {
      return (
        <Provider store={store}>
          <App />
        </Provider>
      );
    }
  }

  return Root;
}
