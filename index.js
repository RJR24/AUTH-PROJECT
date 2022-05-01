const express = require("express");
require("express-async-errors");
const app = express();

const mongoose = require("mongoose");
const debug = require("debug")("app:main");
const config = require("config");
const winston = require("winston");

const router = require("./src/routes/index");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose
  .connect(config.get("db.address"))
  .then(() => debug("connected to the database"))
  .catch((err) => debug("could not connected to the database!!!"));
  
  process.on("uncaughtException", (ex) => {
    console.log("uncaught exception");
    winston.error(ex.message, ex);
  });
  
  process.on("unhandledRejection", (ex) => {
    console.log("unhandled exception");
    winston.error(ex.message, ex);
  });

winston.add(new winston.transports.File({ filename: "logfile.log" }));

const p = promise.reject(new Error("somethig failed"));
p.then(() => {
  console.log("done");
});
throw new Error("khata darim outside express");

app.use("/api", router);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port : ${port}`));
