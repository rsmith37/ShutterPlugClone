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
  city: {
    type: String
  },
  state: {
    type: String
  },
  zipcode: {
    type: String
  },
  phone: {
    type: String
  },
  distance: {
    type: String
  },
  priceRange: {
    type: String
  },
  certifications: [
    {
      type: String
    }
  ],
  specializations: [
    {
      type: String
    }
  ],
  biography: {
    type: String
  },
  socialMedia: {
    instagram: {
      type: String
    },
    facebook: {
      type: String
    },
    twitter: {
      type: String
    }
  },
  website: {
    type: String
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
