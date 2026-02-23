const express = require("express");
const router = express.Router();
const {
  addReceptionist,
  getAllReceptionists,
  updateReceptionist,
  deleteReceptionist,
} = require("../controllers/receptionistController");

// Routes
router.post("/add", addReceptionist);
router.get("/", getAllReceptionists);
router.put("/:id", updateReceptionist);
router.delete("/:id", deleteReceptionist);

module.exports = router;