const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");

// Create a new admin
exports.addAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const admin = await Admin.create({ name, email, password: hash });
    res.status(201).json(admin);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all admins
exports.getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.json(admins);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get single admin
exports.getAdmin = async (req, res) => {
  try {
    const admin = await Admin.findById(req.params.id);
    if (!admin) return res.status(404).json({ message: "Admin not found" });
    res.json(admin);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update admin
exports.updateAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const updateData = { name, email };
    if (password) updateData.password = await bcrypt.hash(password, 10);
    const admin = await Admin.findByIdAndUpdate(req.params.id, updateData, { new: true });
    res.json(admin);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete admin
exports.deleteAdmin = async (req, res) => {
  try {
    await Admin.findByIdAndDelete(req.params.id);
    res.json({ message: "Admin deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};