const GET_EVENTS = 'GET_EVENTS';
import axios from 'axios';

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


  export default function eventsReducer(state = [], action) {
    switch (action.type) {
      case GET_EVENTS:
        return action.events
      default:
        return state
    }
  }