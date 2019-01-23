import * as ClothPageActionTypes from './ClothPageActionTypes';

const initialState = {
  ClothPages: []
};

export default function ClothPageReducer(state = initialState, action) {
  switch (action.type) {
    case ClothPageActionTypes.GET_ALL_CLOTHPAGE__S_START: {
      return {
        ...state
      };
    }

    case ClothPageActionTypes.GET_ALL_CLOTHPAGE__S_SUCCESS: {
      return {
        ...state,
        ClothPages: action.payload
      };
    }

    case ClothPageActionTypes.GET_ALL_CLOTHPAGE__S_FAILURE: {
      return {
        ...state,
        error: action.payload
      };
    }

    case ClothPageActionTypes.ADD_NEW_CLOTHPAGE___SUCCESS: {
      return {
        ...state,
        ClothPages: [...state.ClothPages, action.payload]
      };
    }

    case ClothPageActionTypes.ADD_NEW_CLOTHPAGE___FAILURE: {
      return {
        ...state,
        error: action.payload
      };
    }
    case ClothPageActionTypes.DELETE_CLOTHPAGE___SUCCESS: {
      return {
        ...state,
        ClothPages: [
          ...state.ClothPages.filter(item => item.id !== action.payload)
        ]
      };
    }

    case ClothPageActionTypes.DELETE_CLOTHPAGE___FAILURE: {
      return {
        ...state,
        error: action.payload
      };
    }
    case ClothPageActionTypes.UPDATE_CLOTHPAGE___SUCCESS: {
      const ClothPages = state.ClothPages.map(item => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });

      return {
        ...state,
        ClothPages
      };
    }

    case ClothPageActionTypes.UPDATE_CLOTHPAGE___FAILURE: {
      return {
        ...state,
        error: action.payload
      };
    }

    default:
      return state;
  }
}