import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {
  Card,
  ListItem,
  Button,
  Icon,
} from 'react-native-elements'

import { setName, deleteName } from '../redux';
import { connect } from 'react-redux';
import { store } from '../redux';

// データの永続化
import Storage from 'react-native-storage';
import { AsyncStorage } from "react-native";

// 画面の高さを取得
const { height } = Dimensions.get("window");

const storage = new Storage({
  storageBackend: AsyncStorage
});

var label = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

class List extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}> 
          {label.map(r =>
            <Card
            key={r}
            title={r}
            >
            <View style={{flexDirection: 'row',justifyContent: 'center'}}>
              <Button
                title="-"
                buttonStyle={{
                  borderRadius: 50,
                  width: 60,
                }}
              />
                <Text>
                  10
                </Text>
              <Button
                title="+"
                buttonStyle={{
                  borderRadius: 50,
                  width: 60,
                }}
              />
              </View>
            </Card>
          )}
        </ScrollView>
        <Text style={{ height: height * 0.08, backgroundColor: 'skyblue', color: 'white' }}>Welcome to React Native</Text>
      </View>
    );
  }
}



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