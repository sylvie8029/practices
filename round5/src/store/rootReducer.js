import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import VegetableReducer from '../VegetableModules/store/VegetableReducer';

const rootReducer = combineReducers({
  routerReducer,
  Vegetables: VegetableReducer
});

export default rootReducer;
