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
const { height,width } = Dimensions.get("window");

const storage = new Storage({
  storageBackend: AsyncStorage
});

var label = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

class List extends Component {
  render() {
    return (
      <View style={{ flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}> 
        <View style={{
          flexDirection: 'row',
          flexWrap:'wrap'
        }}>
          {label.map(r =>
            <Card
            key={r}
            title={r}
            width={width*0.4}
            >
            <View style={{flexDirection: 'row',justifyContent: 'center'}}>
              <Button
                title="-"
                buttonStyle={styles.button}
              />
                <Text>
                  10
                </Text>
              <Button
                title="+"
                buttonStyle={styles.button}
              />
              </View>
            </Card>
          )}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    width: 40,
  },
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