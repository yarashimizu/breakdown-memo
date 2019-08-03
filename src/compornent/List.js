import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';

export default class List extends Component {
  render() {
    return (
      <View>
        <ScrollView>
          <Text>footer</Text>
        </ScrollView>
      </View>
    );
  }
}