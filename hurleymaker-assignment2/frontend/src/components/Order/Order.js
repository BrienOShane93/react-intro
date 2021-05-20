import { Grid, Header, Button, Dimmer } from "semantic-ui-react";
import Controls from "./Controls/Controls";
import Checkout from "./Checkout/Checkout";
import React, { useContext } from "react";
import AuthContext from "../../context/auth-context";
import { Link } from 'react-router-dom';

const Order = (props) => {

  const auth = useContext(AuthContext);
  let active = !auth.isLoggedIn;

  return (
    <Grid.Row>
      <Dimmer.Dimmable as={Grid} blurring dimmed={active}>
        <Grid.Row columns={2} centered>
          <Controls
            menu={props.menu}
            styleAdded={props.styleAdded}
            styleRemoved={props.stylegRemoved}
          />
          <Checkout
            menu={props.menu}
            styles={props.chosenStyles}
            price={props.totalPrice}
            checkout={props.checkout}
            disabled={props.disabled}
          />
        </Grid.Row>
        <Dimmer active={active}>
          <Header as="h2" inverted>
            Log in to start choosing your hurleys!
          </Header>
          <Button as={Link} to="/authenticate" color="red" size="large">
            Signup/Login
          </Button>
        </Dimmer>
      </Dimmer.Dimmable>
    </Grid.Row>
  );
};

export default Order;
