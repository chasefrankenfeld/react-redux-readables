export const GET_ALL_POSTS = 'GET_ALL_POSTS';

export const getAllPosts = (posts) => ({
    type: GET_ALL_POSTS,
    posts
});
