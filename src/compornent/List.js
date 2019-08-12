import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { setName, deleteName } from '../redux';
import { connect } from 'react-redux';
import { store } from '../redux';

// 画面の高さを取得
const { height } = Dimensions.get("window");

class List extends Component {
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

const mapStateToProps = state => ({
  // storeは巨大なJsonの塊なので、nameにjsonから取って来たデータを代入している。 
  name: state.user.name
})

const mapDispatchToProps = {
  // importしたactionCreatorを記述。
  setName,
  deleteName
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)