/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Text, View} from 'react-native';

import {Header} from 'react-native-elements';

// Component
import List from "./compornent/List"


// Componentのルーティングをつける

const App = () => {
  return (
    <View>
      <Header
        placement="left"
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: '内訳くん', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      >
      </Header>
      <List/>
    </View>
  );
};

export default App;
