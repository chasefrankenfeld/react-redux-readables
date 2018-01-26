import { POST, POST_VOTE, DELETED_COMMENT } from '../actions';


const post = (state = {}, action) => {
    const { post, postCommentCount } = action;

    switch(action.type) {
        case POST:
            return {
                ...state,
                post
            }
        case POST_VOTE:
            return {
                ...state,
                post
            }
        // case DELETED_COMMENT:
        //     return  {
        //         ...state,
        //         post: {
        //             ...state.post,
        //             commentCount: postCommentCount
        //         }
        //     }
        default:
            return state
    }
};

export default post;