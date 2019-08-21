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
import { ConfirmDialog } from 'react-native-simple-dialogs';
import {
  Card,
  ListItem,
  Button,
  Icon,
  Row,
} from 'react-native-elements'
import {
  addCard,
  delTimer,
  delTimerAll,
  setName,
  deleteName,
  upCount,
  downCount,
  toggleConfrim,
  toggleDelAllConfrim,
} from '../redux';
import { connect } from 'react-redux';
import { store } from '../redux';
import * as preference from '../realm';

// 画面の高さを取得
const { height,width } = Dimensions.get("window");

class List extends Component {
  render() {
    const { sum,cards,dialogVisible,dialogVisibleDelAll} = this.props;
    return (
      <View style={{ flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}> 
        <View style={{
          flexDirection: 'row',
          flexWrap:'wrap',
          flex: 1,
        }}>
          {/* 全件削除の確認メッセージ */}
          <ConfirmDialog
            title="Confirm Dialog"
            message="Are you sure deleting all counter?"
            visible={dialogVisibleDelAll}
            onTouchOutside={() => this.props.toggleDelAllConfrim(false)}
            positiveButton={{
                title: "YES",
                onPress: () => this.props.delTimerAll()
            }}
            negativeButton={{
                title: "NO",
                onPress: () => this.props.toggleDelAllConfrim(false)
            }}
          />
          {/* 各タイマーの設定*/}
            {cards.map(card =>
            <View 
              key={card.id}
              style={{
                margin: 7,
                padding: 6,
                borderColor: 'lightgray',
                borderWidth: 1,
            }}>
              <View style={{width: width*0.25}}>
                <TouchableOpacity style={{
                  borderBottomColor: 'lightgray',
                  borderBottomWidth: 1,
                  justifyContent: 'center',
                  flexDirection: 'row',
                  marginBottom: 5,
                }}>
                  <Text style={{fontSize: 20}}>
                    {card.title}
                  </Text>
                </TouchableOpacity>
              </View>
                <View style={{
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}>
                  {/* 選択されたタイマーの削除確認メッセージ */}
                  <ConfirmDialog
                    title="Confirm Dialog"
                    message="Are you sure deleting this counter?"
                    visible={dialogVisible}
                    onTouchOutside={() => this.props.toggleConfrim(false)}
                    positiveButton={{
                        title: "YES",
                        onPress: () => this.props.delTimer(card.id)
                    }}
                    negativeButton={{
                        title: "NO",
                        onPress: () => this.props.toggleConfrim(false)
                    }}
                  />
                  <View style={{flexDirection: 'row', justifyContent: 'center',marginBottom: 5}}>
                    <Text style={{fontSize: 20}}>
                      {card.count}
                    </Text>
                  </View>
                  <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center'
                  }}>
                    <View style={styles.cardLeft}>
                      <Button
                        large
                        title="-"
                        buttonStyle={styles.button}
                        onPress={() => this.props.downCount(card.id)}
                      />
                    </View>
                    <View style={styles.cardRight}>
                      <Button
                        large
                        title="+"
                        buttonStyle={styles.button}
                        onPress={() => this.props.upCount(card.id)}
                      />
                    </View>
                  </View>
                </View>
              </View>
            )}
          </View>
        </ScrollView>
        <View
          style={{height: height * 0.1,
                  width: width,
                  color: 'white',
                  position: "absolute",
                  bottom: 0,
                  backgroundColor: "#0000FF",
                  opacity: 0.9,
                  justifyContent: "center",
          }}>
          <Button
            title="addCounter"
            onPress={() => this.props.addCard()}
          />
          <Button
            title="delCounter"
            onPress={() => this.props.toggleDelAllConfrim(true)}
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
  cardLeft: {
    width: 41,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  cardRight: {
    width: 41,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});


const mapStateToProps = state => ({
  cards: state.list.cards,
  dialogVisible: state.list.dialogVisible,
  dialogVisibleDelAll: state.list.dialogVisibleDelAll,
})

const mapDispatchToProps = {
  addCard,
  delTimerAll,
  delTimer,
  setName,
  deleteName,
  upCount,
  downCount,
  toggleConfrim,
  toggleDelAllConfrim,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)


/*
                    <Button
                      title="削除"
                      onPress={() => this.props.toggleConfrim(true)}
                    />
*/