import * as API from '../utils/api';
import {
    GET_ALL_CATEGORIES,
    GET_CATEGORY_POSTS
} from './index';

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