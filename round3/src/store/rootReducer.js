import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import ClothReducer from '../ClothModules/store/ClothReducer';
import ShoeReducer from '../Shoemodules/store/ShoeReducer';

const rootReducer = combineReducers({
  routerReducer,
  Cloths: ClothReducer,
  Shoes: ShoeReducer
});

export default rootReducer;
