import { combineReducers } from 'redux';
import location from './location';
import vendorList from './vendorList';

const rootReducer = combineReducers({
    vendorList,
    location
});

export default rootReducer;
