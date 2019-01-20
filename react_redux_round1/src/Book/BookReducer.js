import * as BookActionTypes from './BookActionTypes';

const initialState = [];

export default function Book(state = initialState, action) {
  switch (action.type) {
    case BookActionTypes.GET_ALL_BOOKS_START: {
      return {
        ...state
      };
    }

    case BookActionTypes.GET_ALL_BOOKS_SUCCESS: {
      return action.payload;
    }

    case BookActionTypes.GET_ALL_BOOKS_FAILURE: {
      return {
        ...state,
        error: action.payload
      };
    }

    case BookActionTypes.ADD_NEW_BOOK_SUCCESS: {
      return [...state, action.payload];
    }

    case BookActionTypes.ADD_NEW_BOOK_FAILURE: {
      return {
        ...state,
        error: action.payload
      };
    }
    case BookActionTypes.DELETE_BOOK_SUCCESS: {
      return {
        ...state,
        Books: [...state.Books.filter(item => item.id !== action.payload)]
      };
    }

    case BookActionTypes.DELETE_BOOK_FAILURE: {
      return {
        ...state,
        error: action.payload
      };
    }
    case BookActionTypes.UPDATE_BOOK_SUCCESS: {
      const Books = state.map(item => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });

      return Books;
    }

    case BookActionTypes.UPDATE_BOOK_FAILURE: {
      return {
        ...state,
        error: action.payload
      };
    }

    default:
      return state;
  }
}
