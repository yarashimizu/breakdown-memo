import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {
  Card,
  ListItem,
  Button,
  Icon,
} from 'react-native-elements'

import { setName, deleteName, upCount, downCount } from '../redux';
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


class List extends Component {
  // ボタンクリック時
  onClick = (r) => {

  }

  // データ保存
  _storeData = async () => {
    try {
      await AsyncStorage.setItem('test', 'I like to save it.');
    } catch (error) {
      // Error saving data
    }
  }

  // データ取得
  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('test');
      if (value !== null) {
        // We have data!!
        console.log(value);
      }
    } catch (error) {
      // Error retrieving data
    }
  }

  render() {
    const { sum,cards } = this.props;
    return (
      <View style={{ flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}> 
        <View style={{
          flexDirection: 'row',
          flexWrap:'wrap'
        }}>
          {Object.keys(cards).forEach(key =>
            <Card
            key={cards[key]}
            title={cards[key].title}
            width={width*0.4}
            >
            <View style={{
              flexDirection: 'row',
              justifyContent: 'center'
            }}>
              <Button
                title="-"
                buttonStyle={styles.button}
                onPress={() => this.props.downCount(cards[key].id)}
              />
                <Text>
                  {sum}
                </Text>
              <Button
                title="+"
                buttonStyle={styles.button}
                onPress={() => this.props.upCount(cards[key].id)}
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
  sum: state.list.sum,
  cards: state.list.cards
})

const mapDispatchToProps = {
  // importしたactionCreatorを記述。
  setName,
  deleteName,
  upCount,
  downCount,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)