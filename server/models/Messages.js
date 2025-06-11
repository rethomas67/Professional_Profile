const { Schema, model } = require("mongoose");

const messageSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  message: {
    type: String,
    required: true,
    trim: true,
  },
  postDate: {
    type: Date,
    default: Date.now(),
  },
});

const Messages = model("Message", messageSchema);

module.exports = Messages;
