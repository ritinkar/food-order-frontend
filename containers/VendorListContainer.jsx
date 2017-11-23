import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import VendorList from '../components/VendorList';

//function to calculate distance between two coords
function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    let R = 6371; // Radius of the earth in km
    let dLat = deg2rad(lat2 - lat1);  // deg2rad below
    let dLon = deg2rad(lon2 - lon1);
    let a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2)
        ;
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c; // Distance in km
    return d;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180)
}
//end function

function mapStateToProps(state) {
    let vendorList = state.vendorList.vendors;
    vendorList = vendorList.map((vendor) => {
        let rVendor = {}
        rVendor['name'] = vendor.vendorname;
        let num = getDistanceFromLatLonInKm(vendor.location.latitude, vendor.location.longitude,
            state.location.position.coords.latitude, state.location.position.coords.longitude);
        rVendor['distance'] = Math.round(num * 100) / 100;
        return rVendor
    });
    return {
        vendorList: vendorList.sort((a,b)=>a.distance>b.distance),
        location: state.location
    };
}

const VendorListContainer = connect(
    mapStateToProps
)(VendorList);

export default VendorListContainer;