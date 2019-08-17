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
import { addCard, setName, deleteName, upCount, downCount} from './redux';

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
          centerComponent={{ text: 'カウンターズ', style: { color: '#fff' } }}
          /*rightComponent={{ icon: 'home', color: '#fff' }}*/
          rightComponent={{ icon: 'add', color: '#fff' }}
        />
        <List />
    </View>
  );
};

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
)(App)