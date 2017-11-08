import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Landing from '../components/Landing';
import About from '../components/About';
import VendorListContainer from './VendorListContainer';
import VendorMenuContainer from './VendorMenuContainer';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { spring, AnimatedSwitch } from 'react-router-transition';

// For Customization Options, edit  or use
// './src/material_ui_raw_theme_file.jsx' as a template.
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../src/material_ui_raw_theme_file';

//page transition animation
function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`
  };
}

function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22
  });
}

const bounceTransition = {
  atEnter: {
    opacity: 0,
    scale: 1.2
  },
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8)
  },
  atActive: {
    opacity: bounce(1),
    scale: bounce(1)
  }
};
//page transition animation ends

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <MuiThemeProvider muiTheme={theme}>
            <div>
              <Header />
              <AnimatedSwitch
                atEnter={bounceTransition.atEnter}
                atLeave={bounceTransition.atLeave}
                atActive={bounceTransition.atActive}
                mapStyles={mapStyles}
                className="route-wrapper"
              >
                <Route exact path="/" component={Landing} />
                <Route exact path="/about" component={About} />
                <Route exact path="/dabbawalas" component={VendorListContainer} />
                <Route path='/dabbawalas/:name' component={VendorMenuContainer} />
              </AnimatedSwitch>

            </div>
          </MuiThemeProvider>
        </div>
      </Router>
    );
  }
}





