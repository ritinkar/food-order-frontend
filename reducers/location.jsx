import { REQUEST_LOCATION, RECEIVE_LOCATION, LOCATION_ERROR } from '../constants/ActionTypes';

const initialState = {
    isFetching: false,
    error: false,
    position: {}
}

export default function location(state = initialState, action) {
    switch (action.type) {

        case REQUEST_LOCATION:
            return Object.assign({}, state, {
                isFetching: true
            })
        case RECEIVE_LOCATION:
            return Object.assign({}, state, {
                isFetching: false,
                position: action.position,
                lastUpdated: action.receivedAt
            })
        case LOCATION_ERROR:
            return Object.assign({}, state, {
                error: true
            })
        default:
            return state

    }

}

