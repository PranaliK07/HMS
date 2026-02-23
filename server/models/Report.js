const mongoose = require("mongoose");

const ReportSchema = new mongoose.Schema({
  patient: { type: mongoose.Schema.Types.ObjectId, ref: "Patient", required: true },
  reportType: { type: String, required: true },
  result: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Report", ReportSchema);