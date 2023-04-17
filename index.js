const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const Room = require("./models/room");
const Guest = require("./models/guest");
const port = 3000;

app.set("view engine", "ejs");
// app.engine("html", require("ejs").renderFile);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
express.static("views");
app.use(express.static(path.join(__dirname, "/views")));

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/hotel", { useNewUrlParser: true });
var conn = mongoose.connection;
conn.on("connected", function () {
  console.log("database is connected successfully");
});
conn.on("disconnected", function () {
  console.log("database is disconnected successfully");
});
conn.on("error", console.error.bind(console, "connection error:"));

app.get("/", (req, res) => {
  res.render("index"); // change the path to your index.html
});

app.get("/bookings", (req, res) => {
  res.render("booking/hotelBook");
});

app.post("/bookings", async (req, res) => {
  let dateStart = req.body.dateStart;
  let dateEnd = req.body.dateEnd;

  let totalPersons = req.body.totalPersons;
  let rooms = req.body.rooms;
  let mail = req.body.mail;
  let exampleRadios = req.body.exampleRadios;
  let serviceRadio = req.body.serviceRadio;

  // console.log(dateStart, dateEnd);
  // console.log(exampleRadios + " " + serviceRadio);
  let totalEmpty = await Room.find({ occupied: false }).count();
  //
  if (totalEmpty < rooms) {
    res.send(`
    <script>
    $("#exampleModalCenter").modal("toggle");
    </script>
  `);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
