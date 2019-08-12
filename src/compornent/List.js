import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';

// 画面の高さを取得
const { height } = Dimensions.get("window");

export default class List extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.welcome}>Text</Text>
          <Text style={styles.welcome}>Text</Text>
          <Text style={styles.welcome}>Text</Text>
          <Text style={styles.welcome}>Text</Text>
          <Text style={styles.welcome}>Text</Text>
          <Text style={styles.welcome}>Text</Text>
          <Text style={styles.welcome}>Text</Text>
        </ScrollView>
        <Text style={{ height: height * 0.1 /* 下部10%はスクロール外とする */, backgroundColor: 'blue', color: 'white' }}>Welcome to React Native</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  welcome: {
    flex: 1,
    margin: 20,
    backgroundColor: 'orange',
    margin: 10,
    textAlign: 'center',
    fontSize: 20,
    paddingTop: 70,
  }
});