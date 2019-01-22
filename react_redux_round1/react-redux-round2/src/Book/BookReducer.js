import * as BookActionTypes from './BookActionTypes';

const initialState = { Books: [] };

export default function BookReducer(state = initialState, action) {
  switch (action.type) {
    case BookActionTypes.GET_ALL_BOOKS_START: {
      return { ...state };
    }

    case BookActionTypes.GET_ALL_BOOKS_SUCCESS: {
      console.log(`action.payload:`, action.payload);
      return { ...state, Books: action.payload };
    }

    case BookActionTypes.GET_ALL_BOOKS_FAILURE: {
      return {
        ...state,
        error: action.payload
      };
    }

    case BookActionTypes.ADD_NEW_BOOK_SUCCESS: {
      return { ...state, Books: [...state.Books, action.payload] };
    }

    case BookActionTypes.ADD_NEW_BOOK_FAILURE: {
      return {
        ...state,
        error: action.payload
      };
    }
    case BookActionTypes.DELETE_BOOK_SUCCESS: {
      console.log(`action.payload:`, action.payload);
      return {
        ...state,
        Books: state.Books.filter(item => item.id !== action.payload)
      };
    }

    case BookActionTypes.DELETE_BOOK_FAILURE: {
      return {
        ...state,
        error: action.payload
      };
    }
    case BookActionTypes.UPDATE_BOOK_SUCCESS: {
      const Books = state.Books.map(item => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });

      return {
        ...state,
        Books
      };
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
