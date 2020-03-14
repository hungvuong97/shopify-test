import { combineReducers } from 'redux';
import productPageTabReducer from './productPageTabReducer';
const  rootReducer = combineReducers({
    productTab: productPageTabReducer

})

export default rootReducer;