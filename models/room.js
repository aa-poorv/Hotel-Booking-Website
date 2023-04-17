const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  roomNumber: Number,
  occupied: Boolean,
  facing: {
    type: String,
    enum: ["Forest", "Cemetry"],
  },
});

const Room = mongoose.model("Room", roomSchema);
module.exports = Room;
