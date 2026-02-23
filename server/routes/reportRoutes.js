const express = require("express");
const router = express.Router();
const {
  createReport,
  getAllReports,
} = require("../controllers/reportController");

// Routes
router.post("/add", createReport);
router.get("/", getAllReports);

module.exports = router;