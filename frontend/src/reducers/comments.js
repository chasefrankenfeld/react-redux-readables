import { 
    COMMENTS, 
    COMMENT_VOTE, 
    NEW_POST_COMMENT 
} from '../actions';

const comments = (state = {}, action) => {
    const { comments, comment } = action;

    switch(action.type) {
        case COMMENTS:
            return {
                ...state,
                comments
            }
        case COMMENT_VOTE:
            return {
                ...state,
                comments: state.comments.map((oldComment) => 
                oldComment.id === comment.id ? comment : oldComment
                )
            }
        case NEW_POST_COMMENT:
            return {
                ...state,
                comment
            }
        default:
            return state
    }

};

export default comments;