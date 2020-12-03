import axios from 'axios';

const GET_ALL_USERS = 'GET_ALL_USERS';

const initialState = {
  users: [],
};

// eslint-disable-next-line no-underscore-dangle
export const _getAllUsers = (users) => ({
  type: GET_ALL_USERS,
  users,
});

const getAllUsers = () => async (dispatch) => {
  const res = await axios.get('/api/users');
  dispatch(_getAllUsers(res.data));
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_USERS: return { ...state, users: action.users };
    default: return state;
  }
}

export {
  getAllUsers,
};
