import { REQUEST_VENDORS, REQUEST_MENU, RECEIVE_VENDORS } from '../constants/ActionTypes';

export function vendorList(state = {
    isFetching: false,
    vendors: []
}, action) {
    switch (action.type) {

        case REQUEST_MENU:
            return Object.assign({}, state.vendors.filter(vendor => vendor.name === action.name))
        case REQUEST_VENDORS:
            return Object.assign({}, state, {
                isFetching: true
            })
        case RECEIVE_VENDORS:
            return Object.assign({}, state, {
                isFetching: false,
                vendors: action.vendors,
                lastUpdated: action.receivedAt
            })
        default:
            return state

    }

}