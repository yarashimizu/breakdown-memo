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

const delTimeConfirm = (id) => {
  return (
    <View style={{ flex: 1 }}>
        <Header
          placement="left"
          /*leftComponent={{ icon: 'menu', color: '#fff' }}*/
          centerComponent={{ text: 'カウンター', style: { color: '#fff' } }}
          /*rightComponent={{ icon: 'home', color: '#fff' }}*/
          rightComponent={{ icon: 'add', color: '#fff' }}
        />
        <List />
    </View>
  );
};



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
          <ConfirmDialog
            title="Confirm Dialog"
            message="Are you sure about that?"
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
              <ConfirmDialog
                title="Confirm Dialog"
                message="Are you sure about that?"
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
                <Button
                  title="削除"
                  buttonStyle={styles.button}
                  onPress={() => this.props.toggleConfrim(true)}
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
          style={{height: height * 0.1,
                  width: width,
                  color: 'white',
                  position: "absolute",
                  bottom: 0,
                  backgroundColor: "#0000FF",
                  opacity: 0.5,
                  justifyContent: "center",
          }}>
          <Button
            title="addCard"
            onPress={() => this.props.addCard()}
          />
          <Button
            title="delCard"
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