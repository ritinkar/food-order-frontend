import { REQUEST_LOCATION, RECEIVE_LOCATION, LOCATION_ERROR } from '../constants/ActionTypes';

export function requestLocation() {
    return { type: REQUEST_LOCATION };
}

export function receiveLocation(json) {
    return {
        type: RECEIVE_LOCATION,
        position: json,
        receivedAt: Date.now()
    }
}

export function locationError() {
    return {
        type: LOCATION_ERROR
    }
}

export function fetchLocation() {
    return function (dispatch) {
        dispatch(requestLocation());
        let success = function (position) {
            dispatch(receiveLocation(position));
        }
        navigator.geolocation.getCurrentPosition(success, () => { dispatch(locationError()) });
    }
}