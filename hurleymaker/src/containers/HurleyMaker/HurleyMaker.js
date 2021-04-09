import React, { useState, useEffect } from "react";
import { Grid, Message } from 'semantic-ui-react';
import { v4 as uuidv4 } from 'uuid';
import Menu from '../../components/Menu/Menu';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';

let orderStyles = [];

const HurleyMaker = (props) => {

  const [menuState, setMenuState] = useState({
    styles: [],
    error: false
  });

  useEffect(() => {
      axios.get('/styles.json')
      .then(response => {
        setMenuState({styles: response.data});
        console.log(response);
      })
      .catch(error => {
        setMenuState({styles: menuState.styles, error: true});
        console.log(error);
      });
  }, [])
     
  const [orderState, setOrderState] = useState({
    totalPrice: 5, 
    chosenStyles: []
  });

  const addStyleHandler = (id) => {
    const menuIndex = menuState.styles.findIndex(style => style.id === id);

    const orderIndex = orderStyles.findIndex(style => style.id === id);

    if (orderIndex > -1){
      orderStyles[orderIndex].count++;
    }

    else{
      const chosenStyle = {
        id: menuState.styles[menuIndex].id,
        name: menuState.styles[menuIndex].alt,
        price: menuState.styles[menuIndex].price,
        count: 1
      };
      orderStyles.push(chosenStyle);
    }

    const newPrice = orderState.totalPrice + menuState.styles[menuIndex].price;

    setOrderState({
      totalPrice: newPrice,
      chosenStyles: orderStyles
    });
  }

  const removeStyleHandler = (id) => {
    const index = orderStyles.findIndex(style => style.id === id);

    let price = orderState.totalPrice; 

    if(index >= 0){
      price = price - orderStyles[index].price;
      orderStyles[index].count--;

      if(orderStyles[index].count < 1){
        orderStyles.splice(index, 1);
      }
    }

    setOrderState({
      totalPrice: price,
      chosenStyles: orderStyles
    });
  }      

  let checkoutDisabled = true;

  if(orderState.chosenStyles.length > 0){
    checkoutDisabled = false;
  }

  const checkoutHandler = () => {
    let order = orderState;

    order.id = uuidv4();

    let orderDate = new Date();

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let dayNum = orderDate.getDay();
    let day = days[dayNum];

    let monthNum = orderDate.getMonth();
    let month = months[monthNum];

    let date = orderDate.getDate();
    let year = orderDate.getFullYear();

    let formattedDate = day + " " + date + " " + month + " " + year;

    order.date = formattedDate;

    axios.post('/orders.json', order)
    .then(response => {
        alert('Order saved!');
        
        setOrderState({
          totalPrice: 5,
          chosenStyles: []
        });
        orderStyles=[];
    })
    .catch(error => {
      setMenuState({styles: menuState.styles, error: true});
      alert('Something went wrong :(');
      console.log(error);
      });
  }

  let hurleymakerMenu = menuState.error ? <Message><p>Hurley Maker menu can't be loaded!</p></Message> : <Message><p>Menu loading...</p></Message>;

  if (menuState.styles.length > 0) {
    hurleymakerMenu = (
      <Grid divided='vertically' stackable>
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
  }

  return (
    <div>{hurleymakerMenu}</div>
  )
};

export default HurleyMaker;
