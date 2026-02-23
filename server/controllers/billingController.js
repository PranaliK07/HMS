const Billing = require("../models/Billing");

// Create billing
exports.createBill = async (req, res) => {
  try {
    const { patient, amount } = req.body;
    const bill = await Billing.create({ patient, amount });
    res.status(201).json(bill);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all bills
exports.getAllBills = async (req, res) => {
  try {
    const bills = await Billing.find().populate("patient", "name");
    res.json(bills);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};