import { fetchLocation } from './location';
import { fetchVendors } from './vendors';
import { push } from 'react-router-redux';

export function routeToDabbawalas() {
    return function (dispatch) {
        dispatch(fetchLocation());
        dispatch(fetchVendors());
        dispatch(push('/dabbawalas'));
    }
}

export function handleOrder(){
    return function (dispatch) {
        dispatch(push('/success'));
    }
}


export function handleFailure(){
    return function (dispatch) {
        dispatch(push('/failure'));
    }
}

