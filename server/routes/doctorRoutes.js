const express = require("express");
const router = express.Router();
const {
  addDoctor,
  getAllDoctors,
  getDoctor,
  updateDoctor,
  deleteDoctor,
} = require("../controllers/doctorController");

// Routes
router.post("/add", addDoctor);
router.get("/", getAllDoctors);
router.get("/:id", getDoctor);
router.put("/:id", updateDoctor);
router.delete("/:id", deleteDoctor);

module.exports = router;