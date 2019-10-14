const mongoose = require("mongoose");

const CertSchema = new mongoose.Schema({
  studioLight: {
    type: String
  },
  digitalImage: {
    type: String
  },
  commericial: {
    type: String
  },
  digitalEdit: {
    type: String
  },
  color: {
    type: String
  },
  portraiture: {
    type: String
  },
  masterPhoto: {
    type: String
  },
  photoCraft: {
    type: String
  },
  masterArtist: {
    type: String
  },
  masterWedding: {
    type: String
  }
});

module.exports = Certifications = mongoose.model("cert", CertSchema);
