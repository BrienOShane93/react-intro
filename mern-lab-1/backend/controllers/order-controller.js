const HttpError = require('../utils/http-error');

const Order = require('../models/order');

const TEST_ORDERS = [
    {
      id : "order1",
      chosenToppings : [ 
          { count : 1, id : 0, name : "Mozzarella", price : 0.75 }, 
          { count : 1, id : 2, name : "Basil", price : 0.5 }, 
          { count : 1, id : 3, name : "Tomato", price : 0.5 } 
      ],
      totalPrice : 6.75,
      date : "Tue 30 Mar 2021",
      details : {
          address : "1 High St",
          method : "Delivery",
          name : "Joe Bloggs",
          phone : "0861234567"
      }
    }, 
    {
      id : "order2",
      chosenToppings : [ 
          { "count" : 2, "id" : 0, "name" : "Mozzarella", "price" : 0.75 }, 
          { "count" : 1, "id" : 2, "name" : "Basil", "price" : 0.5 }, 
          { "count" : 1, "id" : 2, "name" : "Salami", "price" : 1 }, 
          { "count" : 1, "id" : 3, "name" : "Tomato", "price" : 0.5 } 
      ],
      totalPrice : 8.5,
      date : "Tue 30 Mar 2021",
      details : {
          address : "101 Main Street",
          method : "Delivery",
          name : "Anne Other",
          phone : "0861212127"
      }
    }
  ];

const orderController = {
	async createOrder (request, response, next) {

        const createdOrder = new Order(request.body);

        try {
          await createdOrder.save();
        } catch (err) {
          const error = new HttpError(
            'Creating order failed, please try again.',
            500
          );
          return next(error);
        }

        response.status(201).json({ order: createdOrder });
    },

	async getAllOrders(request, response, next) {
      let orders;

      try{
        orders = await Order.find({});
      } catch (err) {
          const error = new HttpError(
            'Fetching orders failed, please try again later.',
            500
          );
        return next(error);
      }

      if (!orders || orders.length === 0) {
        const error =  new HttpError('Orders could not be loaded.', 404);
        return next(error);
      }

      response.status(200).json({orders: orders.map(order => order.toObject({getters: true}))});
    },
};

module.exports = orderController;