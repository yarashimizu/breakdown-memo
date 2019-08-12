// redux.js
import {  
  combineReducers,
  createStore,
} from 'redux';

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
export const addCard = (id,title) => ({
  type: "ADD_CARD",
  id,
  title,
});

// カードタイトルを変更する(未実装)
export const changeTitle = (id,title) => ({
  type: "CHANGE_TITLE",
  id,
  title,
});


INITIAL_STATE = {
  sum: 10,
  cards: [],//モデルを作成して配列として扱う
}

const reducer = (state = INITIAL_STATE, action) => {  
  switch (action.type) {
    case "UP_COUNT":
      return {...state, sum: action.sum + 1}
    case "DOWN_COUNT":
      return {...state, sum: action.sum - 1}
    case "ADD_CARD":
      return {...state }
    default:
      return state;
  }
}

export const reducers = combineReducers({  
  list: reducer
})

// store.js
export const store = createStore(reducers)