const HttpError = require("../utils/http-error");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const usersController = {

    async getUserById(request, response, next) {
        const userId = request.params.uid;

        let user;
        try {
          user = await User.findById(userId);
        } catch (err) {
          const error = new HttpError(
            "Something went wrong, user could not be found.",
            500
          );
          return next(error);
        }

        response.json({ user: user.toObject({ getters: true }) });
    },

    async signup(request, response, next) {
        const { name, email, password } = request.body;

        let existingUser;
        try {
          existingUser = await User.findOne({ email: email });
        } catch (err) {
          const error = new HttpError(
            "Signing up failed, please try again later.",
            500
          );
          return next(error);
        }

        if (existingUser) {
          const error = new HttpError(
            "User exists already, please login instead.",
            422
          );
          return next(error);
        }

        let hashedPassword;
        try {
          hashedPassword = await bcrypt.hash(password, 12);
        } catch (err) {
          const error = new HttpError(
            "Could not create user, please try again.",
            500
          );
          return next(error);
        }

        const createdUser = new User({
          name,
          email,
          password: hashedPassword,
          orders: [],
        });

        try {
          await createdUser.save();
        } catch (err) {
          const error = new HttpError("Signing up failed, please try again.", 500);
          return next(error);
        }

        let token;
        try {
          token = jwt.sign(
            { userId: createdUser.id, email: createdUser.email },
            "very_secret_private_key",
            { expiresIn: "1h" }
          );
        } catch (err) {
          const error = new HttpError(
            "Signing up failed, please try again later.",
            500
          );
          return next(error);
        }

        response
            .status(201)
            .json({ userId: createdUser.id, email: createdUser.email, token: token });
    },

    async login(request, response, next) {
        const { email, password } = request.body;

        let existingUser;

        try {
          existingUser = await User.findOne({ email: email });
        } catch (err) {
          const error = new HttpError(
            "Logging in failed, please try again later.",
            500
          );
          return next(error);
        }

        if (!existingUser) {
          const error = new HttpError("User not found, could not log you in.", 403);
          return next(error);
        }

        let isValidPassword = false;
        try {
          isValidPassword = await bcrypt.compare(password, existingUser.password);
        } catch (err) {
          const error = new HttpError(
            "Could not log you in, please check your credentials and try again.",
            500
          );
          return next(error);
        }

        if (!isValidPassword) {
          const error = new HttpError(
            "Invalid credentials, could not log you in.",
            403
          );
          return next(error);
        }

        let token;
        try {
          token = jwt.sign(
            { userId: existingUser.id, email: existingUser.email },
            "very_secret_private_key",
            { expiresIn: "1h" }
          );
        } catch (err) {
          const error = new HttpError(
            "Logging in failed, please try again later.",
            500
          );
          return next(error);
        }

        response.json({
          userId: existingUser.id,
          email: existingUser.email,
          token: token,
        });
  },

};

module.exports = usersController;
