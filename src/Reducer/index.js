import { combineReducers } from 'redux';
import productPageTabReducer from './productPageTabReducer';
import tabByStationReducer from './tabByStationReducer'
const  rootReducer = combineReducers({
    productTab: productPageTabReducer,
    tabByStation: tabByStationReducer

})

export default rootReducer;