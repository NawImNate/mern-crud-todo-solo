const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

const port = 5000;
const dotenv = require("dotenv");

app.use(express.json());

// environment variables
dotenv.config();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Listen on port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// Connect to mdb
mongoose.connect(
  // "mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@todo.h8eo3xa.mongodb.net/test",
  "mongodb+srv://admin:kep96xOejv6O2BtF@todo.h8eo3xa.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
