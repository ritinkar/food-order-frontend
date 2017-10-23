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
    h1: {margin : 20}
};

/**
 * A table containing the list of vendors.
 */
const VendorMenu = () => (
    <div>
        <div>
            <h1 style={defaultStyle.h1}> Menu for INSERT NAME HERE </h1>
        </div>
        <Paper style={defaultStyle} zDepth={3} >
            <Table selectable={false}>
                <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                    <TableRow>
                        <TableHeaderColumn>Food</TableHeaderColumn>
                        <TableHeaderColumn>Price</TableHeaderColumn>
                        <TableHeaderColumn>Order</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                    <TableRow>
                        <TableRowColumn>John Smith</TableRowColumn>
                        <TableRowColumn>₹ 50</TableRowColumn>
                        <TableRowColumn>
                            <Link to="/about">
                                <RaisedButton label="Order" primary={true} />
                            </Link>
                        </TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Randal White</TableRowColumn>
                        <TableRowColumn>₹ 50</TableRowColumn>
                        <TableRowColumn>
                            <Link to="/about">
                                <RaisedButton label="Order" primary={true} />
                            </Link>
                        </TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Stephanie Sanders</TableRowColumn>
                        <TableRowColumn>₹ 40</TableRowColumn>
                        <TableRowColumn>
                            <Link to="/about">
                                <RaisedButton label="Order" primary={true} />
                            </Link>
                        </TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Steve Brown</TableRowColumn>
                        <TableRowColumn>₹ 50</TableRowColumn>
                        <TableRowColumn>
                            <Link to="/about">
                                <RaisedButton label="Order" primary={true} />
                            </Link>
                        </TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Christopher Nolan</TableRowColumn>
                        <TableRowColumn>₹ 50</TableRowColumn>
                        <TableRowColumn>
                            <Link to="/about">
                                <RaisedButton label="Order" primary={true} />
                            </Link>
                        </TableRowColumn>
                    </TableRow>
                </TableBody>
            </Table>
        </Paper>
    </div>
);

export default VendorMenu;