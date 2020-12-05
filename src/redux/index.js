
import { combineReducers } from 'redux';
import usersReducer from './Users';
import eventsReducer from './Events'

const reducer = combineReducers({
  users: usersReducer,
  events: eventsReducer,
});

export default reducer;

