import { 
        GET_ALL_POSTS, 
        POST_VOTE,
        NEW_POST, 
        EDIT_POST,
        DELETE_POST,
        GET_CATEGORY_POSTS, 
        POST_COMMENT_COUNT,
    } from '../actions/index';

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
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter((oldPost) => oldPost.id !== post.id)
            }
        case POST_COMMENT_COUNT:
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