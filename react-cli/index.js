/**
 * @format
 */

import React from 'react';
import {AppRegistry, View} from 'react-native';

import {name as appName} from './app.json';
import Header from './src/components/Header';
import CarList from './src/components/CarList';

const App = () => {
  return (
    <View>
      <Header title={'Cars'} />
      <CarList />
    </View>
  );
};

AppRegistry.registerComponent(appName, () => App);
