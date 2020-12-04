import { combineReducers } from 'redux';
import usersReducer from './users';
import friendsReducer from './friends';
import eventsReducer from './events';




const appReducer = combineReducers({
  user: usersReducer,
  friend: friendsReducer,
  event: eventsReducer,

});
export default appReducer;