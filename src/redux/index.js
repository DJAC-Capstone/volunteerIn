
import { combineReducers } from 'redux';
import usersReducer from './users';
import eventsReducer from './events'
import postsReducer from './posts'

const reducer = combineReducers({
  users: usersReducer,
  events: eventsReducer,
  posts: postsReducer,
});

export default reducer;

