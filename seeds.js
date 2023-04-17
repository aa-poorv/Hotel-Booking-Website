let mongoose = require("mongoose");
const Room = require("./models/room");
mongoose.connect("mongodb://localhost:27017/hotel", { useNewUrlParser: true });
let conn = mongoose.connection;
conn.on("connected", function () {
  console.log("database is connected successfully");
});
conn.on("disconnected", function () {
  console.log("database is disconnected successfully");
});
conn.on("error", console.error.bind(console, "connection error:"));

const seedRooms = [
  {
    roomNumber: 101,
    occupied: false,
    facing: "Forest",
  },
  {
    roomNumber: 102,
    occupied: false,
    facing: "Forest",
  },
  {
    roomNumber: 103,
    occupied: false,
    facing: "Forest",
  },
  {
    roomNumber: 104,
    occupied: false,
    facing: "Forest",
  },
  {
    roomNumber: 105,
    occupied: false,
    facing: "Cemetry",
  },
  {
    roomNumber: 106,
    occupied: false,
    facing: "Cemetry",
  },
  {
    roomNumber: 107,
    occupied: false,
    facing: "Cemetry",
  },
  {
    roomNumber: 108,
    occupied: false,
    facing: "Cemetry",
  },
];

Room.insertMany(seedRooms)
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });
