import { 
    COMMENTS, 
    COMMENT_VOTE, 
    NEW_POST_COMMENT,
    DELETED_COMMENT,
    EDIT_COMMENT
} from '../actions/index';

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
        case EDIT_COMMENT:
            return {
                ...state,
                comments: state.comments.map((oldComment) => 
                oldComment.id === comment.id ? comment : oldComment
                )
            }
        case DELETED_COMMENT:
            return {
                ...state,
                comments: state.comments.filter((oldComment) => oldComment.id !== comment.id)
            }
        default:
            return state
    }

};

export default comments;