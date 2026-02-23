const mongoose = require("mongoose");

const DoctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  specialization: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("Doctor", DoctorSchema);