import axios from 'axios';

const GET_ALL_EVENTS = 'GET_ALL_EVENTS';

const initialState = {
  users: [],
};

// eslint-disable-next-line no-underscore-dangle
export const _getAllEvetnts = (events) => ({
  type: GET_ALL_EVENTS,
  events,
});

const getAllEvetnts = () => async (dispatch) => {
  const res = await axios.get('/api/events');
  dispatch(_getAllEvetnts(res.data));
};

export default function eventReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_EVENTS: return { ...state, events: action.users };
    default: return state;
  }
}

export {
  getAllEvetnts,
};
