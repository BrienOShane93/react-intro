import React, { useState, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import axios from "../../axios-orders";

import Menu from "../../components/Menu/Menu";
import Order from "../../components/Order/Order";
import Loader from "../../components/Feedback/Loader/Loader";
import ErrorModal from "../../components/Feedback/ErrorModal/ErrorModal";

const HurleyMaker = (props) => {

  // MENU, ERROR AND LOADING STATE AND GET TOPPINGS FROM FIREBASE
  const [menuState, setMenuState] = useState({
    styles: [],
  });

  const [errorState, setErrorState] = useState({
    error: false,
    errorMessage: null,
  });

  const [loadingState, setLoadingState] = useState({
    isLoading: true,
    loadFailed: false,
  });

  useEffect(() => {
    axios
      .get("/")
      .then((response) => {
        let sortedStyles = response.data.styles.sort(function (a, b) {
          return a.id - b.id;
        });
        setMenuState({ styles: sortedStyles });
      })
      .catch((error) => {
        setErrorState({
          error: true,
          errorMessage: error.response.data.message,
        });
        setLoadingState({ isLoading: false, loadFailed: menuState.loadFailed });
        console.log(error.response);
      });
  }, []);

  // ORDER STATE

  // Set order state conditionally - either to old order state or starting state

  const [orderState, setOrderState] = useState({
    totalPrice: props.location.state
      ? props.location.state.order.totalPrice
      : 0,
    chosenStyles: props.location.state
      ? props.location.state.order.chosenStyles
      : [],
  });

  // EVENT HANDLERS - ADD TOPPING

  const addStyleHandler = (id) => {
    let order = { ...orderState };

    // find the chosen style in the menu
    const menuIndex = menuState.styles.findIndex(
      (style) => style.id === id
    );

    // check if the style has already been added to the orderStyles array
    const orderIndex = order.chosenStyles.findIndex(
      (style) => style.id === id
    );

    // if so, increase its count by 1
    if (orderIndex > -1) {
      order.chosenStyles[orderIndex].count++;
    }
    // otherwise (i.e. this style is being added for the first time)
    // create this style and add it to the order styles array
    else {
      // Save the id, name and price of the chosen style; set its count to 1
      const chosenStyle = {
        id: menuState.styles[menuIndex].id,
        name: menuState.styles[menuIndex].alt,
        price: menuState.styles[menuIndex].price,
        count: 1,
      };
      order.chosenStyles.push(chosenStyle);
    }

    // Calculate the new price
    const newPrice =
      orderState.totalPrice + menuState.styles[menuIndex].price;

    // Update the order state with the new price and updated styles array
    setOrderState({
      totalPrice: newPrice,
      chosenStyles: order.chosenStyles,
    });
  };

  // EVENT HANDLERS - REMOVE STYLE

  const removeStyleHandler = (id) => {
    let order = { ...orderState };

    // Find style with matching id from the orderToppings
    const index = order.chosenStyles.findIndex(
      (style) => style.id === id
    );

    // Get the current price
    let price = order.totalPrice;

    // If style was found, update the price and decrease the count
    if (index >= 0) {
      price = price - order.chosenStyles[index].price;
      order.chosenStyles[index].count--;

      // If the count is now 0, remove the style completely
      if (order.chosenStyles[index].count < 1) {
        order.chosenStyles.splice(index, 1);
      }
    }

    // Update order state with updated price and updated styles array
    setOrderState({
      totalPrice: price,
      chosenStyles: order.chosenStyles,
    });
  };

  // EVENT HANDLERS - CHECK OUT

  const checkoutHandler = () => {
    props.history.push({
      pathname: "place-order",
      state: {
        order: orderState,
        menu: menuState.styles,
      },
    });
  };

  // ERROR HANDLER

  const errorHandler = () => {
    setErrorState({
      error: false,
      errorMessage: null,
    });
    setLoadingState({
      isLoading: false,
      loadFailed: true,
    });
  };

  // DISABLE CHECKOUT BUTTON IF NO TOPPINGS CHOSEN

  let checkoutDisabled = true;

  if (orderState.chosenStyles.length > 0) {
    checkoutDisabled = false;
  }

  // DISPLAY HURLEY MAKER MENU AND CONTROLS

  let hurleymakerMenu = errorState.error ? (
    <ErrorModal error={errorState.errorMessage} onClear={errorHandler} />
  ) : (
    <Loader active={loadingState.isLoading} />
  );

  if (menuState.styles.length > 0) {
    hurleymakerMenu = (
      <Grid divided="vertically" stackable>
        <Grid.Row centered>
          <Menu menu={menuState.styles} />
        </Grid.Row>
        <Order
          menu={menuState.styles}
          styleAdded={addStyleHandler}
          styleRemoved={removeStyleHandler}
          chosenStyles={orderState.chosenStyles}
          totalPrice={orderState.totalPrice}
          checkout={checkoutHandler}
          disabled={checkoutDisabled}
        />
      </Grid>
    );
  } else if (loadingState.loadFailed) {
    hurleymakerMenu = (
      <p>
        We're having some issues loading the menu... Please try again later.
      </p>
    );
  }

  return <div>{hurleymakerMenu}</div>;
};

export default HurleyMaker;
