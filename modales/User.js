const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userShema = new Schema({
  fullName: String,
  email: String,
  phone: String,
});

module.exports = mongoose.model("User", userShema);
