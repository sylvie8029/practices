import * as VegetableActionTypes from './VegetableActionTypes';

const initialState = {
  Vegetables: []
};

export default function VegetableReducer(state = initialState, action) {
  switch (action.type) {
    case VegetableActionTypes.GET_ALL_VEGETABLES_START: {
      return {
        ...state
      };
    }

    case VegetableActionTypes.GET_ALL_VEGETABLES_SUCCESS: {
      return {
        ...state,
        Vegetables: action.payload
      };
    }

    case VegetableActionTypes.GET_ALL_VEGETABLES_FAILURE: {
      return {
        ...state,
        error: action.payload
      };
    }

    case VegetableActionTypes.ADD_NEW_VEGETABLE_SUCCESS: {
      return {
        ...state,
        Vegetables: [...state.Vegetables, action.payload]
      };
    }

    case VegetableActionTypes.ADD_NEW_VEGETABLE_FAILURE: {
      return {
        ...state,
        error: action.payload
      };
    }
    case VegetableActionTypes.DELETE_VEGETABLE_SUCCESS: {
      return {
        ...state,
        Vegetables: [
          ...state.Vegetables.filter(item => item.id !== action.payload)
        ]
      };
    }

    case VegetableActionTypes.DELETE_VEGETABLE_FAILURE: {
      return {
        ...state,
        error: action.payload
      };
    }
    case VegetableActionTypes.UPDATE_VEGETABLE_SUCCESS: {
      const Vegetables = state.Vegetables.map(item => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });

      return {
        ...state,
        Vegetables
      };
    }

    case VegetableActionTypes.UPDATE_VEGETABLE_FAILURE: {
      return {
        ...state,
        error: action.payload
      };
    }

    default:
      return state;
  }
}