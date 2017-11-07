import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Landing from '../components/Landing';
import About from '../components/About';
import VendorListContainer from './VendorListContainer';
import VendorMenuContainer from './VendorMenuContainer';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// For Customization Options, edit  or use
// './src/material_ui_raw_theme_file.jsx' as a template.
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../src/material_ui_raw_theme_file'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <MuiThemeProvider muiTheme={theme}>
            <div>
              <Header />
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/about" component={About} />
                <Route exact path="/dabbawalas" component={VendorListContainer} />
                <Route path='/dabbawalas/:name' component={VendorMenuContainer}/>
              </Switch>

            </div>
          </MuiThemeProvider>
        </div>
      </Router>
    );
  }
}





