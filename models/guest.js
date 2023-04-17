const mongoose = require("mongoose");
// create an schema
var guestSchema = new mongoose.Schema({
  name: String,
  country: String,
  phoneNumber: Number,
  adhaarNumber: Number,
});
let Guest = mongoose.model("Guest", guestSchema);
module.exports = Guest;
