import * as API from '../utils/api';

export const GET_ALL_POSTS = 'GET_ALL_POSTS';

// Get all posts

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
