const Report = require("../models/Report");

// Create report
exports.createReport = async (req, res) => {
  try {
    const { patient, reportType, result } = req.body;
    const report = await Report.create({ patient, reportType, result });
    res.status(201).json(report);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all reports
exports.getAllReports = async (req, res) => {
  try {
    const reports = await Report.find().populate("patient", "name");
    res.json(reports);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};