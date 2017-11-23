import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { backendURL } from '../constants/settings';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
export default class OrderDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            name: "",
            phone: "",
            nameError: true,
            phoneError: true,
            phoneErrorText:"This field is required"
        }
      }
    
    handleNameChange = (event) => {
        this.setState({
            name: event.target.value,
            nameError: event.target.value===""
        });
    };
    handlePhoneChange = (event) => {
        this.setState({
            phone: event.target.value,
            phoneError: event.target.value===""||event.target.value.match(/^[0-9]+$/) == null,
            phoneErrorText:(event.target.value=="")?"This field is required":"Phone number must contain only numbers"
        });
    };
    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleOrder = () => {


        let orderInit = {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify({
                item: this.props.order.item,
                vendor: this.props.vendor,
                username: this.state.name,
                userPhone: this.state.phone,
                position: {
                    latitude: this.props.location.position.coords.latitude.toString(),
                    longitude: this.props.location.position.coords.longitude.toString()
                }
            })
        };


        console.log(orderInit);

        fetch(backendURL + "order", orderInit).then((response) => {
            if (response.ok) {
                this.setState({ open: false }, this.props.success());
            }
            else {
                this.setState({ open: false }, this.props.failure());
            }
        }).catch((error) => {
            console.log('There has been a problem with your fetch operation: ' + error.message);
        });



    }

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
                disabled={this.state.nameError||this.state.phoneError}
                onClick={this.handleOrder}
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
                    <div style={{ textAlign: 'right' }}>
                        Your order summary
                <br />
                        <br />
                        Item: {this.props.order.item}
                        <br />
                        price: ₹ {this.props.order.price}
                        <br />
                    </div>
                    <TextField
                        hintText="Your name here"
                        floatingLabelText="Enter your name"
                        errorText={this.state.nameError&&"This field is required"}
                        value={this.state.name}
                        onChange={this.handleNameChange}
                    /><br />
                    <TextField
                        hintText="Your phone number here"
                        floatingLabelText="Enter your phone number"
                        errorText={this.state.phoneError&&this.state.phoneErrorText}
                        value={this.state.phone}
                        onChange={this.handlePhoneChange}
                    /><br />
                </Dialog>
            </div>
        );
    }
}