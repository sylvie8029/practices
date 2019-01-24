import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import ClothReducer from '../modules/store/ClothReducer';

const rootReducer = combineReducers({
  routerReducer,
  Cloths: ClothReducer
});

export default rootReducer;
