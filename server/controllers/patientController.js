const Patient = require("../models/Patient");
const bcrypt = require("bcryptjs");

// Add new patient
exports.addPatient = async (req, res) => {
  try {
    const { name, email, phone, age, gender, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const patient = await Patient.create({ name, email, phone, age, gender, password: hash });
    res.status(201).json(patient);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all patients
exports.getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get single patient
exports.getPatient = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) return res.status(404).json({ message: "Patient not found" });
    res.json(patient);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update patient
exports.updatePatient = async (req, res) => {
  try {
    const { name, email, phone, age, gender, password } = req.body;
    const updateData = { name, email, phone, age, gender };
    if (password) updateData.password = await bcrypt.hash(password, 10);
    const patient = await Patient.findByIdAndUpdate(req.params.id, updateData, { new: true });
    res.json(patient);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete patient
exports.deletePatient = async (req, res) => {
  try {
    await Patient.findByIdAndDelete(req.params.id);
    res.json({ message: "Patient deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};