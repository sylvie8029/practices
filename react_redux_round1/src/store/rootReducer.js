import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import BookReducer from '../Book/BookReducer';

const rootReducer = combineReducers({
  routerReducer,
  Books: BookReducer
});

export default rootReducer;
