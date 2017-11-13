import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Landing from '../components/Landing';
import { routeToDabbawalas } from '../actions/routing';





const mapDispatchToProps = dispatch => {
    return {
        onClick: () => {
            return dispatch(routeToDabbawalas());
        }
    }
}

const LandingContainer = connect(
    null,
    mapDispatchToProps
)(Landing);

export default LandingContainer;