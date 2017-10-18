import React, { PropTypes, Component } from 'react';
import TodoTextInput from './TodoTextInput';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import {  BrowserRouter as Router,  Route,  Link} from 'react-router-dom';
import {AppBar, FlatButton} from 'material-ui';

const defaultStyle = {
  marginLeft: 20
};

class Header extends Component {

  render() {
    return (
      <header className="header">
          <AppBar title="Mydabba" 
          iconElementLeft={<Link to="/"><IconButton><ActionHome /></IconButton></Link>}
          iconElementRight={<Link to="/about"><FlatButton label="About" /></Link>}
          />
      </header>
    );
  }
}


export default Header;
