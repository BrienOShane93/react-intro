const HttpError = require("../utils/http-error");

const Style = require("../models/style");

const menuController = {
  async getMenu(request, response, next) {
    let styles;
    try {
      styles = await Style.find({});
    } catch (err) {
      const error = new HttpError(
        "Fetching menu styles failed, please try again later.",
        500
      );
      return next(error);
    }
    response.json({ styles: styles.map((style) => style.toObject()) });
  },
};

module.exports = menuController;
