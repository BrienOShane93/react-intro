import React from "react";
import { Grid } from 'semantic-ui-react';
import Controls from './Controls/Controls';
import Checkout from './Checkout/Checkout';

const Order = (props) => {
  return (
    <Grid.Row columns={2} centered>
        <Controls 
          menu={props.menu}
          styleAdded={props.styleAdded}
          styleRemoved={props.styleRemoved}
        />
        <Checkout 
          menu={props.menu}
          styles={props.chosenStyles}
          price={props.totalPrice}
          checkout={props.checkout}
          disabled={props.disabled}
        />
    </Grid.Row>
  )
};

export default Order;
