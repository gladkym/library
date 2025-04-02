import * as types from './actionTypes';

export const addBook = (newBook) => {
    return {
        type: types.ADD_BOOK,
        payload: newBook,
    };
}

export const deleteBook = (id) => {
    return {
        type: types.DELETE_BOOK,
        payload: id,
    };
}
export const toggleFavorite = (id) => {
    return {
        type: types.TOGGLE_FAVORITE,
        payload: id,
    };
}