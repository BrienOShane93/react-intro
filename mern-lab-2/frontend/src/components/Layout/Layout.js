import React, { useCallback, useState, useEffect } from "react";
import { Container } from "semantic-ui-react";
import { Route, Switch, useHistory } from "react-router-dom";

import "./Layout.css";

import Nav from "../Nav/Nav";
import PizzaPal from "../../containers/PizzaPal/PizzaPal";
import YourOrders from "../../containers/YourOrders/YourOrders";
import PlaceOrder from "../../containers/PlaceOrder/PlaceOrder";
import OrderSuccess from "../../containers/PlaceOrder/OrderSuccess/OrderSuccess";
import Authenticate from "../../containers/Authenticate/Authenticate";
import YourAccount from "../../containers/YourAccount/YourAccount";
import AccountUpdate from "../../containers/YourAccount/AccountUpdate/AccountUpdate";
import AuthContext from "../../context/auth-context";

let logoutTimer;

const Layout = (props) => {
  const [setLoggedInState] = useState({isLoggedIn: false});
  const [token, setToken] = useState(false);
  const [userId, setUserId] = useState(false);
  const [tokenExpirationDate, setTokenExpirationDate] = useState();

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if ( storedData && storedData.token && new Date(storedData.expiration) > new Date() ) {
      login(storedData.userId, storedData.token, new Date(storedData.expiration));
    }
  }, [login]);

  useEffect(() => {
    if (token && tokenExpirationDate) {
      const remainingTime = tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, logout, tokenExpirationDate]);

  const login = useCallback((uid, token, expirationDate) => {
    setToken(token);
    setUserId(uid);
    const tokenExpirationDate = expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
    setTokenExpirationDate(tokenExpirationDate);
    localStorage.setItem(
      "userData",
      JSON.stringify({
        userId: uid,
        token: token,
        expiration: tokenExpirationDate.toISOString(),
      })
    );
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setTokenExpirationDate(null);
    setUserId(null);
    localStorage.removeItem("userData");
    history.push("/");
  }, []);

  let routes;
  if (token) {
    routes = (
      <Switch>
        <Route path="/" exact component={PizzaPal} />
        <Route path="/orders/:uid" component={YourOrders} />
        <Route path="/place-order" component={PlaceOrder} />
        <Route path="/order-success" component={OrderSuccess} />
        <Route path="/users/:uid" component={YourAccount} />
        <Route path="/update-account" component={AccountUpdate} />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact component={PizzaPal} />
        <Route path="/authenticate" component={Authenticate} />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
    <Container>
      <Nav />
      {routes}
    </Container>
    </AuthContext.Provider>
  );
};

export default Layout;
