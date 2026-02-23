const Receptionist = require("../models/Receptionist");
const bcrypt = require("bcryptjs");

// Add receptionist
exports.addReceptionist = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const receptionist = await Receptionist.create({ name, email, password: hash });
    res.status(201).json(receptionist);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all receptionists
exports.getAllReceptionists = async (req, res) => {
  try {
    const receptionists = await Receptionist.find();
    res.json(receptionists);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update receptionist
exports.updateReceptionist = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const updateData = { name, email };
    if (password) updateData.password = await bcrypt.hash(password, 10);
    const receptionist = await Receptionist.findByIdAndUpdate(req.params.id, updateData, { new: true });
    res.json(receptionist);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete receptionist
exports.deleteReceptionist = async (req, res) => {
  try {
    await Receptionist.findByIdAndDelete(req.params.id);
    res.json({ message: "Receptionist deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};