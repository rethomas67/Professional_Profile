const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/Profile"
);

const path = process.env.MONGODB_URI;
console.log(path);
module.exports = mongoose.connection;
