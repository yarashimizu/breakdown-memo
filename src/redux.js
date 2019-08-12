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

// カード自体を増やす
export const addCard = title => ({
  type: "DOWN_COUNT",
  title,
});

INITIAL_STATE = {
  sum: 10,
}

const reducer = (state = INITIAL_STATE, action) => {  
  switch (action.type) {
    case "UP_COUNT":
      return {...state, sum: action.sum + 1}
    case "DOWN_COUNT":
      return {...state, sum: action.sum - 1}
    default:
      return state;
  }
}

export const reducers = combineReducers({  
  cards: reducer
})

// store.js
export const store = createStore(reducers)