import { GET_ALL_POSTS, GET_CATEGORY_POSTS } from '../actions';

const posts = (state = {}, action) => {
    const { posts } = action;

    switch(action.type) {
        case GET_ALL_POSTS:
            return {
                ...state,
                posts
            }
        case GET_CATEGORY_POSTS:
            return {
                ...state,
                posts
            }
        default:
            return state
    }
};

export default posts;