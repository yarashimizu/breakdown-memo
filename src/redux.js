// redux.js
import {  
  combineReducers,
  createStore,
} from 'redux';
import * as preference from './realm';

// カードの合計を増やす
export const upCount = sum => ({
  type: "UP_COUNT",
  sum,
});

// カードの合計を減らす
export const downCount = sum => ({
  type: "DOWN_COUNT",
  sum,
});

// カード自体を増やす(未実装)
export const addCard = () => ({
  type: "ADD_CARD",
});

// カードを全消しする
export const delCardAll = () => ({
  type: "DEL_CARD_ALL",
});

// カードタイトルを変更する(未実装)
export const changeTitle = (id,title) => ({
  type: "CHANGE_TITLE",
  id,
  title,
});


INITIAL_STATE = {
  sum: 10,
  cards: preference.getTimers(),//モデルを作成して配列として扱う
}

const reducer = (state = INITIAL_STATE, action) => {  
  switch (action.type) {
    case "UP_COUNT":
      return {...state, sum: action.sum + 1}
    case "DOWN_COUNT":
      return {...state, sum: action.sum - 1}
    case "ADD_CARD":
      preference.addTimer();
      return {...state, cards: preference.getTimers()}
    case "DEL_CARD_ALL":
      return {...state, cards}
    default:
      return state;
  }
}

export const reducers = combineReducers({  
  list: reducer
})

// store.js
export const store = createStore(reducers)