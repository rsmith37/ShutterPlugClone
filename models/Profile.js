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
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  city: {
    type: String
  },
  state: {
    type: String
  },
  zip: {
    type: String
  },
  phoneNumber: {
    type: String
  },
  selectedDistance: {
    type: String
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
