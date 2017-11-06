import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import VendorList from '../components/VendorList';

function mapStateToProps(state) {
    return {
        vendorList: state.vendorList.vendors
    };
}

const VendorListContainer = connect(
    mapStateToProps
)(VendorList);

export default VendorListContainer;