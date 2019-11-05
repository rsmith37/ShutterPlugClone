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
  usertype: {      //Referencing what type of you the profile will be             
    type: String,  //Whether an admin or artist
    required: true
  }
});

module.exports = User = mongoose.model("users", UserSchema);
