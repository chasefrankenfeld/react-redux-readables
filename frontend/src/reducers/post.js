import { POST } from '../actions';


const post = (state = {}, action) => {
    const { post } = action;

    switch(action.type) {
        case POST:
            return {
                ...state,
                post
            }
        default:
            return state
    }
};

export default post;