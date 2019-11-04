const mongoose = require("mongoose");
const schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new schema({
  user: {
    type: schema.Types.ObjectId, // Associate the user by its objectID
    ref: "users" // Reference the collection we want to refer to
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zip: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  selectedDistance: {
    type: Object
  },
  selectedCertifications: [
    {
      type: String
    }
  ],
  selectedSpecializations: [
    {
      type: String
    }
  ],
  bio: {
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
