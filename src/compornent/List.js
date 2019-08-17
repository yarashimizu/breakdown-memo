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
  delCardAll,
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
          flexWrap:'wrap'
        }}><Button
              title="addCard"
              onPress={() => this.props.addCard()}
            />
            <Button
              title="delCard"
              onPress={() => this.props.delCardAll()}
            />
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
                />
                  <Text>
                    {sum}
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
  sum: state.list.sum,
  cards: state.list.cards
})

const mapDispatchToProps = {
  addCard,
  delCardAll,
  setName,
  deleteName,
  upCount,
  downCount
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)