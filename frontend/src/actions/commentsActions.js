import * as API from '../utils/api';
import {
    COMMENTS,
    COMMENT_VOTE,
    NEW_POST_COMMENT,
    DELETED_COMMENT,
    POST_COMMENT_COUNT,
    EDIT_COMMENT
} from './index';

// Get Post Comments

export const fetchPostComments = (id) => dispatch => (
    API.fetchPostComments(id).then((comments) => {
        dispatch(getPostComments(comments))
    })
)

export const getPostComments = (comments) => ({
    type: COMMENTS,
    comments
})

// Comment Votes

export const commentUpVote = (id) => dispatch => (
    API.postCommentVote(id, "upVote").then((comment) => {
        dispatch(commentVote(comment))
    })
);

export const commentDownVote = (id) => dispatch => (
    API.postCommentVote(id, "downVote").then((comment) => {
        dispatch(commentVote(comment))
    })
);

export const commentVote = (comment) => ({
    type: COMMENT_VOTE,
    comment
})

// New post comment

export const newComment = (id, timestamp, body, author, parentId) => dispatch => (
    API.postComment(id, timestamp, body, author, parentId).then((comment) => {
        dispatch(newPostComment(comment))
    })
);

export const newPostComment = (comment) => ({
    type: NEW_POST_COMMENT,
    comment
})

// Delete comment

export const fetchDeleteComment = (id, post) => dispatch => (
    API.postComment(id).then((comment) => {
        dispatch(deletedComment(comment))
        dispatch(changePostCommentCount({
            ...post,
            "commentCount": post.commentCount -1
        }))
    })
);

export const deletedComment = (comment) => ({
    type: DELETED_COMMENT,
    comment
})

export const changePostCommentCount = (post) => ({
    type: POST_COMMENT_COUNT,
    post
})

// Edit post comment

export const fetchEditComment = (id, timestamp, body) => dispatch => (
    API.editComment(id, timestamp, body).then((comment) => {
        dispatch(editComment(comment))
    })
);

export const editComment = (comment) => ({
    type: EDIT_COMMENT,
    comment
})