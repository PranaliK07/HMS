const express = require("express");
const router = express.Router();
const {
  addPatient,
  getAllPatients,
  getPatient,
  updatePatient,
  deletePatient,
} = require("../controllers/patientController");

// Routes
router.post("/add", addPatient);
router.get("/", getAllPatients);
router.get("/:id", getPatient);
router.put("/:id", updatePatient);
router.delete("/:id", deletePatient);

module.exports = router;