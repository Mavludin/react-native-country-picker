/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import React from 'react';
import App from './src/App';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const RNRedux = () => () =>
  (
    <GestureHandlerRootView>
      <App />
    </GestureHandlerRootView>
  );

AppRegistry.registerComponent(appName, RNRedux);
