import { 
    GET_ALL_POSTS, 
    GET_CATEGORY_POSTS, 
    POST_UP_VOTE 
    } from '../actions';

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
        case POST_UP_VOTE:
            return {
                ...state,
                posts: state.posts.map((post) => 
                    (post.id === action.post.id) ? action.post : post
                )
            }
        default:
            return state
    }
};

export default posts;