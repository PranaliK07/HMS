const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true },
  phone: { type: String },
  age: { type: Number },
  gender: { type: String },
  password: { type: String, required: true },
});

module.exports = mongoose.model("Patient", PatientSchema);