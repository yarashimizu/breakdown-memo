// React-Native
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';

// redux
import { Provider } from 'react-redux';
import { store } from './redux';
import { connect } from 'react-redux';
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
} from './redux';

// Container
//import { ListContainer } from "./container/ListContainer"

// Component
import {Header} from 'react-native-elements';
import List from "./compornent/List";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
        <Header
          placement="left"
          /*leftComponent={{ icon: 'menu', color: '#fff' }}*/
          centerComponent={{ text: 'Counters', style: { color: '#fff' } }}
          /*rightComponent={{ icon: 'home', color: '#fff' }}*/
          /*rightComponent={{ icon: 'add', color: '#fff' }}*/
        />
        <List />
    </View>
  );
};

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
)(App)