import { REQUEST_VENDORS, RECEIVE_VENDORS } from '../constants/ActionTypes';

const initialState=  {
    isFetching: false,
    vendors: []
}

export default function vendorList(state = initialState, action) {
    switch (action.type) {
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