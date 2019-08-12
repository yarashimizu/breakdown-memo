/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Provider } from 'react-redux'
import { store } from './redux'
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import App from "./App";

// Componentのルーティング
const Root = () => {
  return (
      <Provider store={store}>
        <App />
      </Provider>
  );
};

export default Root;
