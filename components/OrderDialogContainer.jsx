import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import OrderDialog from './OrderDialog';
import { handleOrder } from '../actions/routing';





const mapDispatchToProps = dispatch => {
    return {
        onClick: () => {
            return dispatch(handleOrder());
        }
    }
}

function mapStateToProps(state, ownProps) {
    return ownProps;
}

const OrderDialogContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderDialog);

export default OrderDialogContainer;