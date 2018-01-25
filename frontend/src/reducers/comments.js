import { COMMENTS, COMMENT_VOTE } from '../actions';

const comments = (state = {}, action) => {
    const { comments } = action;

    switch(action.type) {
        case COMMENTS:
            return {
                ...state,
                comments
            }
        case COMMENT_VOTE:
            return {
                ...state,
                comments: state.comments.map((comment) => 
                    comment.id === action.comment.id ? action.comment : comment
                )
            }
        default:
            return state
    }

};

export default comments;