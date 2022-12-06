const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const bodyParser = require("body-parser");

const event = require("./routes/event");
const participant = require("./routes/participant");

const port = process.env.PORT || 5000;

app.use(cors());

let MONGODB_URI =
  "mongodb+srv://admin:admin@mauriciosalin.9ol1trt.mongodb.net/barbecue-organizer-1?retryWrites=true&w=majority";
const mongoDB = process.env.MONGODB_URI || MONGODB_URI;

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/events", event);
app.use("/participants", participant);

app.listen(port, () => {
  console.log("Server is up and running on port number " + port);
});
