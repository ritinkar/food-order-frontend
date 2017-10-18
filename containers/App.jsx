import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Landing from '../components/Landing';
import About from '../components/About';
import * as TodoActions from '../actions/todos';
import {  BrowserRouter as Router,  Route,  Link} from 'react-router-dom';

// For Customization Options, edit  or use
// './src/material_ui_raw_theme_file.jsx' as a template.
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../src/material_ui_raw_theme_file'

class App extends Component {
  render() {
    const { todos, actions } = this.props;
    return (
      <Router>
      <div>
        <MuiThemeProvider muiTheme={theme}>
          <div>
            <Header addTodo={actions.addTodo} />
            <Route exact path="/" component={Landing} />
            <Route exact path="/about" component={About} />
            
          </div>
        </MuiThemeProvider>
      </div>
      </Router>
    );
  }
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
