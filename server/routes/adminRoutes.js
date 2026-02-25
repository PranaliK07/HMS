const express = require("express");
const router = express.Router();

const adminController = require("../controllers/adminController");
const { verifyToken } = require("../middleware/authMiddleware");

// Protect this route using JWT
router.get("/stats", verifyToken, adminController.getStats);

module.exports = router;