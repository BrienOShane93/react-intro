const HttpError = require('../utils/http-error');
const Order = require('../models/order');
const mongoose = require("mongoose");
const User = require("../models/user");

const orderController = {
  async createOrder(request, response, next) {

    const createdOrder = new Order(request.body);

    let user;
    try {
      user = await User.findById(createdOrder.userId);
    } catch (err) {
      const error = new HttpError(
        "Creating order failed, please try again",
        500
      );
      return next(error);
    }

    if (!user) {
      const error = new HttpError("Could not find user for provided id", 404);
      return next(error);
    }

    try {
      const sess = await mongoose.startSession();
      sess.startTransaction();
      await createdOrder.save({ session: sess });
      user.orders.push(createdOrder);
      await user.save({ session: sess });
      await sess.commitTransaction();
    } catch (err) {
      const error = new HttpError(
        "Creating order failed, please try again.",
        500
      );
      return next(error);
    }

    response.status(201).json({ order: createdOrder });
  },
};

module.exports = orderController;