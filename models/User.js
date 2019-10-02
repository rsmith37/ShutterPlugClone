const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  password: {
    type: String,
    required: true
  },
  specializations: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "specializations"
    }
  ],
  location: {
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
  socialMedia: {
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    facbook: {
      type: String
    },
    instagram: {
      type: String
    },
    linkedin: {
      type: String
    }
  }
});

module.exports = User = mongoose.model("user", UserSchema);
