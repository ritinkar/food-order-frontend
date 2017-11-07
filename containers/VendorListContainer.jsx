import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import VendorList from '../components/VendorList';

function mapStateToProps(state) {
    let vendorList = state.vendorList.vendors;
    vendorList = vendorList.map((vendor) => {
        let rVendor = {}
        rVendor['name'] = vendor.vendorname;
        rVendor['distance'] = 2;
        return rVendor
    });
    console.log(vendorList);
    return {
        vendorList: vendorList
    };
}

const VendorListContainer = connect(
    mapStateToProps
)(VendorList);

export default VendorListContainer;