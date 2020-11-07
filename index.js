/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';
import Header from './src/components/Header';
// import App from './App';

const App = () => {
  return <Header />;
};

AppRegistry.registerComponent(appName, () => App);
