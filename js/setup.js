import React, { Component } from 'react';
import moment from 'moment-timezone';
import momentLocale from 'moment/locale/pt-br';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'react-native-material-ui';
import reducers from './reducers';
import Colors from './components/Colors';
import { getAuthToken } from './lib/storage';

import App from './App';
import { getStore } from './store';

export default function setup() {
  const uiTheme = {
    pallete: {
      primaryColor: Colors.primary,
      accentColor: Colors.secondary,
    }
  };

  moment.locale('pt-br', momentLocale);

  class Root extends Component {
    constructor() {
      super();
      this.state = {
        isLoading: true,
        store: null,
      };
    }
    componentDidMount() {
      getAuthToken().then((isLoggedIn) => this.setState({
        isLoading: false,
        store: getStore(reducers, {
          auth: { isLoggedIn: !!isLoggedIn }
        })
      }));
    }

    render() {
      const { isLoading, store } = this.state;
      if (isLoading) {
        return null;
      }

      console.log(store.getState());

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
