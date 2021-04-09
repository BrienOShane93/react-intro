import React from "react";
import {Menu} from 'semantic-ui-react';
import {NavLink} from 'react-router-dom';

const Nav = (props) => {
  return (
    <Menu color='black' stackable inverted>
        <Menu.Item>
            <img src='images/logo.png' alt='Hurley Maker Logo' />
        </Menu.Item>

        <Menu.Item as={NavLink} to="/" exact>
            Hurley Maker
        </Menu.Item>

        <Menu.Item as={NavLink} to="/orders">
            Your Orders
        </Menu.Item>
    </Menu>
  )
};

export default Nav;
