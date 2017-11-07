import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
export default class OrderDialog extends React.Component {
    state = {
        open: false
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Place order"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleClose}
            />

        ];

        return (
            <div>
                <RaisedButton label="Order" onClick={this.handleOpen} primary={true} />
                <Dialog
                    title="Please enter your Name and Phone Number"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                <div style={{textAlign: 'right'}}>
                Your order summary
                <br/>
                <br/>
                Item: {this.props.order.item}
                <br/>
                price: {this.props.order.price}
                <br/>
                </div>
                    <TextField
                        hintText="Your name here"
                        floatingLabelText="Enter your name"
                    /><br />
                    <TextField
                        hintText="Your phone number here"
                        floatingLabelText="Enter your phone number"
                    /><br />
                </Dialog>
            </div>
        );
    }
}