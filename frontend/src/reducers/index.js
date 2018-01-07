import { GET_ALL_POSTS } from '../actions';

const posts = (state = {}, action) => {
    const { posts } = action;

    switch(action.type) {
        case GET_ALL_POSTS:
            return {
                ...state,
                posts
            }
        default:
            return state
    }
};

export default posts;