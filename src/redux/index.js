import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import userReducer from './users';
import eventReducer from './Events';

const appReducer = combineReducers({

  evets: eventReducer,
  users: userReducer,

});

const store = createStore(appReducer, applyMiddleware(thunk));
export default store;
