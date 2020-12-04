import axios from 'axios';

////////ACTION TYPES//////////

const SET_FRIEND = 'SET_FRIEND';
const DELETE_FRIEND = 'DELETE_FRIEND';
const ADD_FRIEND ='ADD_FRIEND';



const _setFriend = (friend) => {
  return {
    type: SET_FRIEND,
    friend,
  };
};




const _deleteFriend = (id) => {
  return {
    type: DELETE_FRIEND,
    id,
  };
};



const _addFriend = (friend) =>{
    return{
        type:ADD_FRIEND,
        friend,
    };
};

///////THUNK CREATORS////////


export const setFriend = () => {
  return async (dispatch) => {
    const { data } = await axios.get('/api/friends');
    dispatch(_setFriend(data));
  };
};


export const addFriend = ({ friend, id }) => {
  try {
    return async (dispatch) => {
      const { data } = axios.put(`/api/friends/${id}/follow`, { friend });
      dispatch(_addFriend(data));
    };
  } catch (err) {
    console.log(err);
  }
};



export const deleteFriend = ({ id, history }) => {
  try {
    return async (dispatch) => {
      axios.delete(`/api/friends/${id}`);
      dispatch(_deleteFriend(id));
      history.push('/friends');
    };
  } catch (err) {
    console.log(err);
  }
};

////////USERS REDUCER//////////

export default function friendsReducer(state = [], action) {

  if (action.type === SET_FRIEND) {
    return action.friend;
  }
 
  if (action.type === DELETE_FRIEND) {
    return state.filter((friend) => friend.id !== action.friend.id);
  }
  
  if(action.type===ADD_FRIEND){
    return [...state,action.friend];
}
  return state;
}