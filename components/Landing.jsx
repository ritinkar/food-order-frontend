import React, { PropTypes, Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { RaisedButton } from 'material-ui';
import { routeToAbout } from '../actions/routing';


const defaultStyle = {
    margin: 20
};

class Landing extends Component {

    render() {
        return (
            <div style={defaultStyle}>
                <div >
                    Lorem ipsum dolor sit amet, ne quem dolorum splendide nam. Cibo omnesque temporibus ea mel. Mel suas nihil nostro ea, persius molestie expetenda est cu. In habeo gubergren mei, etiam delicata an has, ea sed reque rationibus reprimique. Summo iracundia ut eam. Cum in putant postulant, cum falli urbanitas constituto ea.
                </div>
                <br/>
                <div>
                    
                        <RaisedButton label="Start" onClick={this.props.onClick} primary={true} style={{margin: '0 auto'}}/>
                    
                </div>
            </div>
        );
    }
}



export default Landing;