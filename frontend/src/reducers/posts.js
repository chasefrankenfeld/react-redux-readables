import { 
    GET_ALL_POSTS, 
    GET_CATEGORY_POSTS, 
    POST_VOTE,
    NEW_POST, 
    EDIT_POST
    } from '../actions';

const posts = (state = {}, action) => {
    const { posts, post } = action;

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
        case NEW_POST:
            return {
                ...state,
                post
            }
        case EDIT_POST:
            return {
                ...state,
                posts: state.posts.map((oldPost) => 
                    (oldPost.id === post.id) ? post : oldPost
                )
            }
        case POST_VOTE:
            return {
                ...state,
                posts: state.posts.map((oldPost) => 
                    (oldPost.id === post.id) ? post : oldPost
                )
            }
        default:
            return state
    }
};

export default posts;