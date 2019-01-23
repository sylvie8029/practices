import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import  ClothPageReducer  from '../modules/Cloth/store/ClothPageReducer';

const rootReducer = combineReducers({
  routerReducer,
  ClothPages: ClothPageReducer
});

export default rootReducer;
