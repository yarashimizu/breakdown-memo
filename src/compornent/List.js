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
import {
  addCard,
  delTimer,
  delTimerAll,
  setName,
  deleteName,
  upCount,
  downCount
} from '../redux';
import { connect } from 'react-redux';
import { store } from '../redux';
import * as preference from '../realm';

// 画面の高さを取得
const { height,width } = Dimensions.get("window");

class List extends Component {
  // ボタンクリック時
  onClick = (r) => {
    console.log(r[2]);
  }

  render() {
    const { sum,cards } = this.props;
    return (
      <View style={{ flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}> 
        <View style={{
          flexDirection: 'row',
          flexWrap:'wrap',
          flex: 1,
        }}>
            {cards.map(card =>
              <Card
              key={card.id}
              title={card.title}
              width={width*0.4}
              >
              <View style={{
                flexDirection: 'row',
                justifyContent: 'center'
              }}>
                <Button
                  title="-"
                  buttonStyle={styles.button}
                  onPress={() => this.props.delTimer(card.id)}
                />
                <Button
                  title="-"
                  buttonStyle={styles.button}
                  onPress={() => this.props.downCount(card.id)}
                />
                  <Text>
                    {card.count}
                  </Text>
                <Button
                  title="+"
                  buttonStyle={styles.button}
                  onPress={() => this.props.upCount(card.id)}
                />
                </View>
              </Card>
            )}
          </View>
        </ScrollView>
        <View
          style={{ height: height * 0.1, color: 'white' }}>
          <Button
              title="addCard"
              onPress={() => this.props.addCard()}
            />
          <Button
            title="delCard"
            onPress={() => this.props.delTimerAll()}
          />
        </View>
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
  cards: state.list.cards
})

const mapDispatchToProps = {
  addCard,
  delTimerAll,
  delTimer,
  setName,
  deleteName,
  upCount,
  downCount,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)