import { combineReducers } from 'redux';
import todos from './todos';
import location from './location';
import vendorList from './vendorList';

const rootReducer = combineReducers({
    todos,
    vendorList,
    location
});

export default rootReducer;
