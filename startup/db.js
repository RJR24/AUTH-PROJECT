const mongoose = require("mongoose");
const debug = require("debug")("app:main");
const config = require("config");

module.exports = function () {
  mongoose
    .connect(config.get("db.address"))
    .then(() => debug("connected to the database"))
    .catch((err) => debug("could not connected to the database!!!"));
};
