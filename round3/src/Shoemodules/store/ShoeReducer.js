import * as ShoeActionTypes from './ShoeActionTypes';

const initialState = {
  Shoes: []
};

export default function ShoeReducer(state = initialState, action) {
  switch (action.type) {
    case ShoeActionTypes.GET_ALL_SHOES_START: {
      return {
        ...state
      };
    }

    case ShoeActionTypes.GET_ALL_SHOES_SUCCESS: {
      return {
        ...state,
        Shoes: action.payload
      };
    }

    case ShoeActionTypes.GET_ALL_SHOES_FAILURE: {
      return {
        ...state,
        error: action.payload
      };
    }

    case ShoeActionTypes.ADD_NEW_SHOE_SUCCESS: {
      return {
        ...state,
        Shoes: [...state.Shoes, action.payload]
      };
    }

    case ShoeActionTypes.ADD_NEW_SHOE_FAILURE: {
      return {
        ...state,
        error: action.payload
      };
    }
    case ShoeActionTypes.DELETE_SHOE_SUCCESS: {
      return {
        ...state,
        Shoes: [...state.Shoes.filter(item => item.id !== action.payload)]
      };
    }

    case ShoeActionTypes.DELETE_SHOE_FAILURE: {
      return {
        ...state,
        error: action.payload
      };
    }
    case ShoeActionTypes.UPDATE_SHOE_SUCCESS: {
      const Shoes = state.Shoes.map(item => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });

      return {
        ...state,
        Shoes
      };
    }

    case ShoeActionTypes.UPDATE_SHOE_FAILURE: {
      return {
        ...state,
        error: action.payload
      };
    }

    default:
      return state;
  }
}
