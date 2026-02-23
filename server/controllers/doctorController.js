const Doctor = require("../models/Doctor");
const bcrypt = require("bcryptjs");

// Add new doctor
exports.addDoctor = async (req, res) => {
  try {
    const { name, email, specialization, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const doctor = await Doctor.create({ name, email, specialization, password: hash });
    res.status(201).json(doctor);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all doctors
exports.getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get single doctor
exports.getDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) return res.status(404).json({ message: "Doctor not found" });
    res.json(doctor);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update doctor
exports.updateDoctor = async (req, res) => {
  try {
    const { name, email, specialization, password } = req.body;
    const updateData = { name, email, specialization };
    if (password) updateData.password = await bcrypt.hash(password, 10);
    const doctor = await Doctor.findByIdAndUpdate(req.params.id, updateData, { new: true });
    res.json(doctor);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete doctor
exports.deleteDoctor = async (req, res) => {
  try {
    await Doctor.findByIdAndDelete(req.params.id);
    res.json({ message: "Doctor deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};