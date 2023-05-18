/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import TrackPlayer from 'react-native-track-player';
import { Provider } from 'react-redux';
import { store } from './src/services/store';


const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);


AppRegistry.registerComponent(appName, () => Root);
TrackPlayer.registerPlaybackService(() => require('./service'));
