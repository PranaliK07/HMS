const express = require("express");
const router = express.Router();
const {
  addStaff,
  getAllStaff,
  updateStaff,
  deleteStaff,
} = require("../controllers/staffController");

// Routes
router.post("/add", addStaff);
router.get("/", getAllStaff);
router.put("/:id", updateStaff);
router.delete("/:id", deleteStaff);

module.exports = router;