import React, { Component } from 'react';
import moment from 'moment';
import momentLocale from 'moment/locale/pt-br';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'react-native-material-ui';
import reducers from './reducers';
import Colors from './components/Colors';

import App from './App';
import { getStore } from './store';

export default function setup() {
  const store = getStore(reducers, {});
  const uiTheme = {
    pallete: {
      primaryColor: Colors.primary,
      accentColor: Colors.secondary,
    }
  };

  moment.locale('pt-br', momentLocale);

  class Root extends Component {
    render() {
      return (
        <ThemeProvider uiTheme={uiTheme}>
          <Provider store={store}>
            <App />
          </Provider>
        </ThemeProvider>
      );
    }
  }

  return Root;
}
