const { booleanParser } = require("config/parser");
const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
});
userSchema.plugin(timestamps);



const User = mongoose.model("User", userSchema);
module.exports = User;
