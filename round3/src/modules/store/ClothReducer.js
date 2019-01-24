import * as ClothActionTypes from './ClothActionTypes';

const initialState = {
  Cloths: []
};

export default function ClothReducer(state = initialState, action) {
  switch (action.type) {
    case ClothActionTypes.GET_ALL_CLOTHS_START: {
      return {
        ...state
      };
    }

    case ClothActionTypes.GET_ALL_CLOTHS_SUCCESS: {
      return {
        ...state,
        Cloths: action.payload
      };
    }

    case ClothActionTypes.GET_ALL_CLOTHS_FAILURE: {
      return {
        ...state,
        error: action.payload
      };
    }

    case ClothActionTypes.ADD_NEW_CLOTH_SUCCESS: {
      return {
        ...state,
        Cloths: [...state.Cloths, action.payload]
      };
    }

    case ClothActionTypes.ADD_NEW_CLOTH_FAILURE: {
      return {
        ...state,
        error: action.payload
      };
    }
    case ClothActionTypes.DELETE_CLOTH_SUCCESS: {
      return {
        ...state,
        Cloths: [...state.Cloths.filter(item => item.id !== action.payload)]
      };
    }

    case ClothActionTypes.DELETE_CLOTH_FAILURE: {
      return {
        ...state,
        error: action.payload
      };
    }
    case ClothActionTypes.UPDATE_CLOTH_SUCCESS: {
      const Cloths = state.Cloths.map(item => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });

      return {
        ...state,
        Cloths
      };
    }

    case ClothActionTypes.UPDATE_CLOTH_FAILURE: {
      return {
        ...state,
        error: action.payload
      };
    }

    default:
      return state;
  }
}
