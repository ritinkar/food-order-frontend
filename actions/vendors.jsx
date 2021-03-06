import { REQUEST_VENDORS, RECEIVE_VENDORS } from '../constants/ActionTypes';
import { backendURL } from '../constants/settings';


//async
export function requestVendors() {
    return { type: REQUEST_VENDORS };
}



export function receiveVendors(json) {
    return {
        type: RECEIVE_VENDORS,
        vendors: json,
        receivedAt: Date.now()
    }
}


export function fetchVendors()
{
    return function (dispatch) {
        dispatch(requestVendors());

        return fetch(backendURL+"vendors")
        .then(response => response.json())
        .then(json => dispatch(receiveVendors( json)))
    }
}