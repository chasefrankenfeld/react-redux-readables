import * as API from '../utils/api';
import {
    GET_ALL_POSTS,
    POST_VOTE,
    POST,
    NEW_POST,
    EDIT_POST,
    DELETE_POST
} from './index';


// Get Posts

export const fetchAllPosts = () => dispatch => (
    API.fetchAllPosts().then((posts) => {
        dispatch(getAllPosts(posts))
    })
);

// export const fetchAllPosts = () => dispatch => (
//     API.fetchAllPosts().then((posts) => {
//         dispatch(getAllPosts(
//             posts.reduce((postsObject, item) => {
//                     postsObject[item.id] = item
//                     postsObject.allIDs.push(item.id)
//                     return postsObject
//                   }, {allIDs: []}
//             )
//         ))
//     })
// );

export const getAllPosts = (posts) => ({
    type: GET_ALL_POSTS,
    posts
});

// Post Votes

export const postUpVote = (id) => dispatch => (
    API.postPostVote(id, "upVote").then((post) => {
        dispatch(postVote(post))
    })
);

export const postDownVote = (id) => dispatch => (
    API.postPostVote(id, "downVote").then((post) => {
        dispatch(postVote(post))
    })
);

export const postVote = (post) => ({
    type: POST_VOTE,
    post
})

// Get Post

export const fetchPost = (id) => dispatch => (
    API.fetchPost(id).then((post) => {
        if (!post.id) {
            dispatch(getPost({deleted: true}))
        } else {
            dispatch(getPost(post))
        }
    })
);

export const getPost = (post) => ({
    type: POST,
    post
})

// Post New Post

export const newPost = (id, timestamp, title, body, author, category) => dispatch => (
    API.postPost(id, timestamp, title, body, author, category).then((post) => {
        dispatch(createNewPost(post))
    })
);

export const createNewPost = (post) => ({
    type: NEW_POST,
    post
})

// Put Edit Post

export const fetchEditPost = (id, title, body) => dispatch => (
    API.editPost(id, title, body).then((post) => {
        dispatch(editPost(post))
    })
)

export const editPost = (post) => ({
    type: EDIT_POST,
    post
})

// Delete post

export const fetchDeletedPost = (id) => dispatch => (
    API.deletePost(id).then((post) => {
        dispatch(deletePost(post))
    })
);

export const deletePost = (post) => ({
    type: DELETE_POST,
    post
})


