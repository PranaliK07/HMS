const express = require("express");
const router = express.Router();
const {
  createBill,
  getAllBills,
} = require("../controllers/billingController");

// Routes
router.post("/add", createBill);
router.get("/", getAllBills);

module.exports = router;