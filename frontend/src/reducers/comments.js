import { COMMENTS } from '../actions';

const comments = (state = {}, action) => {
    const { comments } = action;

    switch(action.type) {
        case COMMENTS:
            return {
                ...state,
                comments
            }
        default:
            return state
    }

};

export default comments;