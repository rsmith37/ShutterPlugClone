const mongoose = require("mongoose");

const SpecialSchema = new mongoose.Schema({
  wedding: {
    type: Boolean
  },
  studio: {
    type: Boolean
  },
  outside: {
    type: Boolean
  },
  family: {
    type: Boolean
  },
  baby: {
    type: Boolean
  },
  prom: {
    type: Boolean
  },
  engagement: {
    type: Boolean
  },
  redCarpet: {
    type: Boolean
  },
  drone: {
    type: Boolean
  },
  product: {
    type: Boolean
  },
  fashion: {
    type: Boolean
  },
  architecture: {
    type: Boolean
  },
  sports: {
    type: Boolean
  },
  videography: {
    type: Boolean
  },
  webContent: {
    type: Boolean
  },
  care: {
    type: Boolean
  },
  food: {
    type: Boolean
  },
  photoEdit: {
    type: Boolean
  },
  videoEdit: {
    type: Boolean
  },
  photoRestore: {
    type: Boolean
  },
  parties: {
    type: Boolean
  },
  reunions: {
    type: Boolean
  },
  bachParty: {
    type: Boolean
  },
  stock: {
    type: Boolean
  },
  auto: {
    type: Boolean
  },
  pet: {
    type: Boolean
  },
  nature: {
    type: Boolean
  },
  blogV: {
    type: Boolean
  }
});

module.exports = Specializations = mongoose.model(
  "specializations",
  SpecialSchema
);
