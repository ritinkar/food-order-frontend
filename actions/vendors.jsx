import * as types from '../constants/ActionTypes';
import { backendURL } from '../constants/settings';


//async
export function requestVendors() {
    return { type: types.REQUEST_VENDORS };
}



export function receiveVendors(json) {
    return {
        type: RECEIVE_VENDORS,
        vendors: json.map(child => child.data),
        receivedAt: Date.now()
    }
}


export function fetchVendors()
{
    return function (dispatch) {
        dispatch(requestVendors());

        return fetch(backendURL)
        .then(response => response.json())
        .then(json => dispatch(receiveVendors( json)))
    }
}