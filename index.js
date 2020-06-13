/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import RootReducer from './src/Redux/Reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(RootReducer);

const AppContainer = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppContainer);
