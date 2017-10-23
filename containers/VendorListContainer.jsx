import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import VendorList from '../components/VendorList';


const vl=[{name:"randall",distance:3,id:4},{name:"akira",distance:7,id:5},{name:"spiderman",distance:8,id:7}]
class VendorListContainer extends Component {


    render() {
        return <VendorList vendorList={vl}  ></VendorList>;
    }
}

export default VendorListContainer;