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
import { setName, deleteName } from './redux';

// Component
import {Header} from 'react-native-elements';
import List from "./compornent/List";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
        <Header
          placement="left"
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'カウンターズ', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <List />
    </View>
  );
};

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
)(App)