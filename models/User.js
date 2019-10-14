const mongoose = require("mongoose");
const schema = mongoose.Schema;

const UserSchema = new schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  username: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  usertype: {
    type: String,
    required: true
  }
});

module.exports = User = mongoose.model("users", UserSchema);
