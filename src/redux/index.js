
import { combineReducers } from 'redux';
import usersReducer from './Users';
import eventsReducer from './events'

const reducer = combineReducers({
  users: usersReducer,
  events: eventsReducer,
});

export default reducer;

