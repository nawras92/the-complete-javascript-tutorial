const mongoose = require("mongoose");

//db info
const dbHost = "mongodb://localhost:27017";
const dbName = "lwn";
const URL = `${dbHost}/${dbName}`;
const OPTIONS = {};

//db connection
const connect = mongoose.connect(URL, OPTIONS);
const db = mongoose.connection;

//connect and catch errors
db.on("error", (err) => {
  console.log(`Mongoose connection error: ${err}`);
});

db.on("connected", (err) => {
  console.log(`Connected to ${URL} db`);
});

module.exports = db;
