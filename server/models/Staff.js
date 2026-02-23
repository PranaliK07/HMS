const mongoose = require("mongoose");

const StaffSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  role: { type: String, required: true }, // e.g., Nurse, Lab, etc.
  password: { type: String, required: true },
});

module.exports = mongoose.model("Staff", StaffSchema);