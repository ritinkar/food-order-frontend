import React, { Component } from 'react';
import { connect } from 'react-redux';
import OrderDialog from './OrderDialog';
import { handleOrder, handleFailure } from '../actions/routing';





const mapDispatchToProps = dispatch => {
    return {
        success: () => {
            return dispatch(handleOrder());
        },
        failure: () => {
            return dispatch(handleFailure());
        }
    }
}

function mapStateToProps(state, ownProps) {
    return {
        location: state.location,
        ownProps
    };
}

const OrderDialogContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderDialog);

export default OrderDialogContainer;