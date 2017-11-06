import * as types from '../constants/ActionTypes';

export function requestLocation() {
    return { type: types.REQUEST_LOCATION };
}

export function receiveLocation(json) {
    return {
        type: RECEIVE_LOCATION,
        position: json.map(child => child.data),
        recievedAt: Date.now()
    }
}