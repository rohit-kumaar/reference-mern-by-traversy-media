const express = require("express");
const router = express.Router();
const {
  createGoal,
  readGoals,
  updateGoal,
  deleteGoal,
} = require("../controller/goalController");

router.route("/").post(createGoal).get(readGoals);
router.route("/:id").put(updateGoal).delete(deleteGoal);

module.exports = router;
