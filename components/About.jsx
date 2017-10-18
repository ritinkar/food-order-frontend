import React, { PropTypes, Component } from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const defaultStyle = {
    marginLeft: 20
};

class About extends Component {

    render() {
        return (
            <div style={defaultStyle}>
                <div>
                    <h1> About Dabbawala </h1>
                </div>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </div>

        );
    }
}


export default About;