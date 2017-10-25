import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import VendorMenu from '../components/VendorMenu';


//dummy variable please ignore
const vl=[{name:"randall",price:3,id:4},{name:"akira",price:7,id:5},{name:"spiderman",price:8,id:7}]


class VendorMenuContainer extends Component {


    render() {
        return <VendorMenu menuList={vl}></VendorMenu>;
    }
}

export default VendorMenuContainer;