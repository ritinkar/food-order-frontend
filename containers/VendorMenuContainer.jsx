import React, { Component } from 'react';
import { connect } from 'react-redux';
import VendorMenu from '../components/VendorMenu';





function mapStateToProps(state, ownProps) {
    let vendor = state.vendorList.vendors.filter((vendor) => {
        return vendor.vendorname === ownProps.match.params.name;
    }).pop();
    return {
        vendor: vendor
    };
}

const VendorMenuContainer = connect(
    mapStateToProps
)(VendorMenu);

export default VendorMenuContainer;