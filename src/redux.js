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

INITIAL_STATE = {
  name: 'Nanasi'
}

const reducer = (state = INITIAL_STATE, action) => {  
  switch (action.type) {
    case 'ADD_NAME':
      return {...state, name: action.name}
    case 'DELETE_NAME':
      return {...state, name: ''}
    default:
      return state;
  }
}

export const reducers = combineReducers({  
  user: reducer
})

// store.js
export const store = createStore(reducers)