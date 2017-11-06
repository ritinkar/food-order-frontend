import * as types from '../constants/ActionTypes';


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


//Synchronous
export function requestMenu(name) {
    return { type: types.REQUEST_MENU, name };
}