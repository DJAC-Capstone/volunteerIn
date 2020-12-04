import axios from 'axios';

////////ACTION TYPES//////////

const SET_EVENT = 'SET_EVENT';
const CREATE_EVENT = 'CREATE_EVENT';
const UPDATE_EVENT = 'UPDATE_EVENT';
const DELETE_EVENT = 'DELETE_EVENT';
const ADD_EVENT ='ADD_EVENT';




const _setEvent = (event) => {
  return {
    type: SET_EVENT,
    event,
  };
};

const _createEvent = (event) => {
  return {
    type: CREATE_EVENT,
    event,
  };
};



const _deleteEvent = (id) => {
  return {
    type: DELETE_EVENT,
    id,
  };
};

const _addEvent = (event) =>{
    return{
        type:ADD_EVENT,
        event,
    };
};



///////THUNK CREATORS////////


export const setEvent = () => {
  return async (dispatch) => {
    const { data } = await axios.get('/api/events');
    dispatch(_setEvent(data));
  };
};

export const createEvent = (event) => {
  try {
    console.log(event);
    return async (dispatch) => {
      const { data } = axios.post('/api/events', { event });
      dispatch(_createEvent(data));
    };
  } catch (err) {
    console.log('please enter vaild info');
  }
};


export const addEvent = ({ event, id }) => {
  try {
    return async (dispatch) => {
      const { data } = axios.put(`/api/events/${id}`, { event});
      dispatch(_addEvent(data));
    };
  } catch (err) {
    console.log(err);
  }
};

export const deleteEvent = ({ id, history }) => {
  try {
    return async (dispatch) => {
      axios.delete(`/api/events/${id}`);
      dispatch(_deleteEvent(id));
      history.push('/events');
    };
  } catch (err) {
    console.log(err);
  }
};

////////USERS REDUCER//////////

export default function eventsReducer(state = [], action) {

  if (action.type === SET_EVENT) {
    return action.event;
  }
  if (action.type === CREATE_EVENT) {
    return [...state, action.event];
  }
 
  if (action.type === DELETE_EVENT) {
    return state.filter((event) => event.id !== action.event.id);
  }
  if(action.type===ADD_EVENT){
      return [...state,action.event];
  }

  return state;
}