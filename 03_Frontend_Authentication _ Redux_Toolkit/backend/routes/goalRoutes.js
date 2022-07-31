const express = require("express");
const router = express.Router();
const {
  createGoal,
  readGoals,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").post(protect, createGoal).get(protect, readGoals);
router.route("/:id").put(protect, updateGoal).delete(protect, deleteGoal);

module.exports = router;
