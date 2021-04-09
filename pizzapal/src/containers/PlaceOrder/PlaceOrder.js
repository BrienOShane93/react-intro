import React, { useState } from "react";
import { Grid, Segment, Header, Button, Form, Select } from 'semantic-ui-react';
import OrderSummary from "../../components/Order/Checkout/OrderSummary/OrderSummary";
import { withRouter } from 'react-router-dom';

const PlaceOrder = (props) => {

 	const [orderState, setOrderState] = useState({
	    totalPrice: 
	        props.location.state ? 
	        props.location.state.order.totalPrice : 5, 
	    chosenToppings: 
	        props.location.state ? 
	        props.location.state.order.chosenToppings: orderToppings

	    if (props.location.state) {
			orderToppings = props.location.state.order.chosenToppings;
		}

		 window.history.replaceState('/', undefined);
	}); 

	const [customerState, setCustomerState] = useState({
        details:{
            name: "",
            phone: "",
            method: "",
            address: ""
        }
    });

    const cancelHandler = () => {
        props.history.push({
            pathname: '/', 
            state: {
              order: orderState, 
            }
          });
    };

    console.log(props);

    <Form>
      <Form.Input
          error='Please enter your name'
          required
          label='Name'
          placeholder='Name'
          id='form-input-name'
          onChange={(event) => formChangedHandler(event, 'form-input-name', 'input')}
      />
      <Form.Input
          error='Please enter your phone number'
          required
          label='Phone'
          placeholder='Phone'
          id='form-input-phone'
          onChange={(event) => formChangedHandler(event, 'form-input-phone', 'input')}
      />
      <Form.Field
          control={Select}
          required
          error='Please choose collection or delivery'
          label='Delivery method'
          options={[
              { key: 'c', text: 'Collection', value: 'collection' },
              { key: 'd', text: 'Delivery', value: 'delivery' }
          ]}
          placeholder='Collection or Delivery'
          id='form-input-method'
          onChange={(event) => formChangedHandler(event, 'form-input-method', 'select')}
      />
      <Form.Input
          error='Please enter your delivery address'
          fluid
          label='Address'
          placeholder='Address'
          id='form-input-address'
          onChange={(event) => formChangedHandler(event, 'form-input-address', 'input')}
      />

  	const formChangedHandler = (event, inputIdentifier, inputType) => {

        let customerDetails = customerState.details;

        switch(inputIdentifier) {
            case "form-input-name":
                customerDetails.name = event.target.value;
                break;
            case "form-input-phone":
                customerDetails.phone = event.target.value;
                break;
            case "form-input-method":
                customerDetails.method = event.target.textContent;
                break;
            case "form-input-address":
                customerDetails.address = event.target.value;
                break;
            default:
              customerDetails = customerState.details;
          }

        setCustomerState({details: customerDetails});
    }

	return (
		<Grid>
	        <Grid.Row columns={2}>

	            <Grid.Column width={6}>
	                <Segment color='red'>
	                    <Header as='h2' textAlign='center' color='red'>
	                        Confirm your order:
	                    </Header>
	                    <OrderSummary 
						    menu = {props.location.state.menu}
						    toppings = {orderState.chosenToppings}
						    price = {orderState.totalPrice}
						/>
	                    <Button color="red" onClick={cancelHandler}>Go Back</Button>
	                </Segment>
	            </Grid.Column>

	            <Grid.Column width={10}>
	                <Segment color='red'>
	                        <Header as='h2' textAlign='center' color='red'>
	                            Enter your details:
	                        </Header>
	                        Form goes here
	                    </Segment>
	            </Grid.Column>

	        </Grid.Row>
        </Grid>
	)
};

export default withRouter(PlaceOrder);