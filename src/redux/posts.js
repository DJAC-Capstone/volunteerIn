import axios from 'axios';
const GET_POSTS = 'GET_POSTS';
const CREATE_POST = 'CREATE_POST';
const SINGLE_POST = 'SINGLE_POST'

const initialState = {
  post: {},
  posts: [],
};


export const _getPosts = (posts) => {
    return {
      type: GET_POSTS,
      posts,
    };
  };

export const getPosts = () => {
    try {
    return async (dispatch) => {
        const posts  = await axios.get('/api/posts');
        dispatch(_getPosts(posts.data));
      };
    } catch (err) {
      console.log('please add photo');
    }
  };

  export const _createPost = (post) => ({
    type: CREATE_POST,
    post,
  });
  
  // export const createPost = (infoObject) => async (dispatch) => {
  //   const res = await axios.post(`/api/posts/create/${infoObject.imagePreviewUrl}`, infoObject.file,{ headers: {
  //     'Content-Type': infoObject.file.type
  //   }
  //   });
    
  //   console.log(res.data)
  //   dispatch(_createPost(res.data));
  // };

  export const createPost = (infoObject) => async (dispatch) => {
    const res = await axios.post('/api/posts/create', infoObject)
    console.log(res.data)
    dispatch(_createPost(res.data));
  };
  export const _singlePost = (post) => {
    return {
    type: SINGLE_POST,
    post
}}

export const singlePost = (id) => {
    return async(dispatch) => {
        const res = await axios.get(`/api/posts/${id}`)
        dispatch(_singlePost(res.data))
    }
}
  export default function eventsReducer(state = initialState, action) {
    switch (action.type) {
      case GET_POSTS: return { ...state, posts: action.posts };
      case CREATE_POST: return { ...state, post: action.post };
      case SINGLE_POST: return { ...state, post: action.post };
      default:
        return state
    }
  }