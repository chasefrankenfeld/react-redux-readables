import * as API from '../utils/api';

export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES';
export const GET_CATEGORY_POSTS = 'GET_CATEGORY_POSTS';
export const POST_UP_VOTE = 'POST_UP_VOTE';

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

// Get Categories

export const fetchAllCategories = () => dispatch => (
    API.fetchAllCategories().then((categories) => {
        dispatch(getAllCategories(categories))
    })
);

export const getAllCategories = (categories) => ({
    type: GET_ALL_CATEGORIES,
    categories
});

// Get Category Posts

export const fetchCategoryPosts = (category) => dispatch => (
    API.fetchCategoryPosts(category).then((posts) => {
        dispatch(getCategoryPosts(posts))
    })
);

export const getCategoryPosts = (posts) => ({
    type: GET_CATEGORY_POSTS,
    posts
});

// Upvote Post

export const postUpVote = (id) => dispatch => (
    API.postPostVote(id, "upVote").then((post) => {
        dispatch(upVote(post))
    })
);

export const upVote = (post) => ({
    type: POST_UP_VOTE,
    post
})


