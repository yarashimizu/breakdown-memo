// redux.js
import {  
  combineReducers,
  createStore,
} from 'redux';

export const deleteName = () => ({  
  type: 'DELETE_NAME',
  name: ''
});

// 引数nameをとり、{type: "ADD_NAME", name: name}を返すjsの関数。
export const setName = name => ({  
  type: 'ADD_NAME',
  name: name,
});

export const upCount = sum => ({
  type: "UP_COUNT",
  sum,
});

export const downCount = sum => ({
  type: "DOWN_COUNT",
  sum,
});


INITIAL_STATE = {
  name: 'Nanasi',
  sum: 10,
}

const reducer = (state = INITIAL_STATE, action) => {  
  switch (action.type) {
    case 'ADD_NAME':
      return {...state, name: action.name}
    case 'DELETE_NAME':
      return {...state, name: ''}
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