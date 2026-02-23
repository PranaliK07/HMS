const express = require("express");
const router = express.Router();
const {
  addAdmin,
  getAllAdmins,
  getAdmin,
  updateAdmin,
  deleteAdmin,
} = require("../controllers/adminController");

// Routes
router.post("/add", addAdmin);
router.get("/", getAllAdmins);
router.get("/:id", getAdmin);
router.put("/:id", updateAdmin);
router.delete("/:id", deleteAdmin);

module.exports = router;