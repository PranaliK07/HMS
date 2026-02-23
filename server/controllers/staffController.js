const Staff = require("../models/Staff");
const bcrypt = require("bcryptjs");

// Add staff
exports.addStaff = async (req, res) => {
  try {
    const { name, email, role, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const staff = await Staff.create({ name, email, role, password: hash });
    res.status(201).json(staff);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all staff
exports.getAllStaff = async (req, res) => {
  try {
    const staffList = await Staff.find();
    res.json(staffList);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update staff
exports.updateStaff = async (req, res) => {
  try {
    const { name, email, role, password } = req.body;
    const updateData = { name, email, role };
    if (password) updateData.password = await bcrypt.hash(password, 10);
    const staff = await Staff.findByIdAndUpdate(req.params.id, updateData, { new: true });
    res.json(staff);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete staff
exports.deleteStaff = async (req, res) => {
  try {
    await Staff.findByIdAndDelete(req.params.id);
    res.json({ message: "Staff deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};