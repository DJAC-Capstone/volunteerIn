
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import usersReducer from './users';
import eventReducer from './Events';

const appReducer = combineReducers({

  evet: eventReducer,
  user: usersReducer,

});

const store = createStore(appReducer, applyMiddleware(thunk));
export default store;

