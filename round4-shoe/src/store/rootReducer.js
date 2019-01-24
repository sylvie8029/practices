import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import ShoePageReducer from '../modules/Shoe/store/ShoeReducer';

const rootReducer = combineReducers({
  routerReducer,
  Shoes: ShoePageReducer
});

export default rootReducer;
