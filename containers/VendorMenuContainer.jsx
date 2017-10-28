import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import VendorMenu from '../components/VendorMenu';


//dummy variable please ignore
const vl=[{name:"paneer",price:140,id:4},{name:"chicken",price:150,id:5},{name:"aloo",price:100,id:7}]


class VendorMenuContainer extends Component {


    render() {
        return <VendorMenu menuList={vl}></VendorMenu>;
    }
}

export default VendorMenuContainer;