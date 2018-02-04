import { 
    POST, 
    POST_VOTE,
    POST_COMMENT_COUNT,
    EDIT_POST
} from '../actions/index';


const post = (state = {}, action) => {
    const { post } = action;

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
        case EDIT_POST:
            return {
                ...state,
                post
            }
        case POST_COMMENT_COUNT:
            return  {
                ...state,
                post
            }
        default:
            return state
    }
};

export default post;