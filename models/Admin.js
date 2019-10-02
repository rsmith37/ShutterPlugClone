const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  accessLevel: {
    type: String,
    required: true
  }
});

module.exports = User = mongoose.model("admin", AdminSchema);
