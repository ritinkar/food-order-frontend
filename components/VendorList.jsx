import React from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const defaultStyle = {
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
    h1: { margin: 20 },
    overflow: 'auto'
};

/**
 * A table containing the list of vendors.
 */
const VendorList = (props) => {
    if (props.location.error === true) { return (<div><h1>Sorry we can't continue without your location</h1></div>) }
    else {
        return (<div>
            <div>
                <h1 style={defaultStyle.h1}> List of dabbawalas near you. </h1>
            </div>
            <Paper style={defaultStyle} zDepth={3} >
                <Table selectable={false}>
                    <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                        <TableRow>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>Distance</TableHeaderColumn>
                            <TableHeaderColumn>Menu</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {props.vendorList.map((vendor, i) =>
                            <TableRow key={i}>
                                <TableRowColumn>{vendor.name}</TableRowColumn>
                                <TableRowColumn>{vendor.distance} km</TableRowColumn>
                                <TableRowColumn>
                                    <Link to={"/dabbawalas/" + vendor.name}>
                                        <RaisedButton label="menu" primary={true} />
                                    </Link>
                                </TableRowColumn>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </Paper>
        </div>
        );
    }
}
export default VendorList;