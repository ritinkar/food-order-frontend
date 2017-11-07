import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import VendorMenu from '../components/VendorMenu';


function mapStateToProps(state,ownProps) {
    let vendor = state.vendorList.vendors.filter((vendor) => {
        return vendor.vendorname===ownProps.match.params.name;
    });
    console.log(vendor[0]);
    return {
        vendor: vendor[0]
    };
}

const VendorMenuContainer = connect(
    mapStateToProps
)(VendorMenu);

export default VendorMenuContainer;