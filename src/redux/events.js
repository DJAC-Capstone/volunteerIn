import axios from 'axios';
const GET_EVENTS = 'GET_EVENTS';
const CREATE_EVENT = 'CREATE_EVENT';

const initialState = {
  event: {},
  events: [],
};


export const _getEvents = (events) => {
    return {
      type: GET_EVENTS,
      events,
    };
  };

export const getEvents = () => {
    try {
    return async (dispatch) => {
        const events  = await axios.get('/api/events');
        dispatch(_getEvents(events.data));
      };
    } catch (err) {
      console.log('please enter vaild info');
    }
  };

  export const _createEvent = (event) => ({
    type: CREATE_EVENT,
    event,
  });
  
  export const createEvent = (infoObject) => async (dispatch) => {
    const res = await axios.post('/api/events/create', infoObject);
    dispatch(_createEvent(res.data));
  };

  export default function eventsReducer(state = initialState, action) {
    switch (action.type) {
      case GET_EVENTS:
        return { ...state, events: action.events };
      case CREATE_EVENT:
        return { ...state, event: action.event };
      default:
        return state
    }
  }