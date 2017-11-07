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
import OrderDialog from './OrderDialog';


const defaultStyle = {
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
    h1: { margin: 20 }
};

/**
 * A table containing the list of vendors.
 */
const VendorMenu = (props) => (
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
                    {props.menuList.map((item, i) =>
                        <TableRow key={i}>
                            <TableRowColumn>{item.vendorname}</TableRowColumn>
                            <TableRowColumn>₹ {item.price}</TableRowColumn>
                            <TableRowColumn>
                                <OrderDialog order={item}/>
                            </TableRowColumn>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </Paper>
    </div>
);

export default VendorMenu;