import React from "react";
import {Container} from 'semantic-ui-react';
import './Layout.css';

import {Route} from 'react-router-dom';
import Nav from '../Nav/Nav';
import HurleyMaker from '../../containers/HurleyMaker/HurleyMaker';
import YourOrders from '../../containers/YourOrders/YourOrders';

const Layout = (props) => {
  return (
    <Container>
        <Nav />
        <Route path="/" exact component={HurleyMaker} />
    	<Route path="/orders" component={YourOrders} />
    </Container>
  )
};

export default Layout;
