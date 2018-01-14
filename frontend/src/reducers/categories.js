import { GET_ALL_CATEGORIES } from '../actions';


const categories = (state = {}, action) => {
    const { categories } = action;

    switch(action.type) {
        case GET_ALL_CATEGORIES:
            return {
                ...state,
                categories
            }
        default:
            return state
    }
};

export default categories;