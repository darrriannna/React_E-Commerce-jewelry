// src/redux/reducers/index.js
import { combineReducers } from 'redux';
import handleCart from './handleCart';

const rootReducers = combineReducers({
  handleCart,
});

export default rootReducers;