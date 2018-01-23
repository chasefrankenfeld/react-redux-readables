import { POST, POST_VOTE } from '../actions';


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
        default:
            return state
    }
};

export default post;