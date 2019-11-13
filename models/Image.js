const mongoose = require("mongoose");
const schema = mongoose.Schema;

// Create Schema
const ImageSchema = new schema({
  pic: {
    data: Buffer,
    contentType: String
  }
  // user: {
  //   type: schema.Types.ObjectId, // Associate the user by its objectID
  //   ref: "users" // Reference the collection we want to refer to
  // },
  // imageName: {
  //   type: String,
  //   default: "none",
  //   required: true
  // },
  // imageData: {
  //   type: String,
  //   required: true
  // }
});

  var Image = mongoose.model("Image", ImageSchema);
module.exports = Image;
