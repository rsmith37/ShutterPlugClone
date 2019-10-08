const mongoose = require("mongoose");
const schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new schema({
  user: {
    type: schema.Types.ObjectId, // Associate the user by its objectID
    ref: "users" // Reference the collection we want to refer to
  },
  handle: {
    type: String,
    max: 40
  },
  location: {
    type: String
  },
  phone: {
    type: String
  },
  specializations: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "specializations"
    }
  ],
  website: {
    type: String
  },
  priceRange: {
    type: String
  },
  certifications: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "cert"
    }
  ],
  youtube: {
    type: String
  },
  twitter: {
    type: String
  },
  facebook: {
    type: String
  },
  instagram: {
    type: String
  },
  linkedin: {
    type: String
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
