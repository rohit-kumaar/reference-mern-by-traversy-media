const express = require("express");
const router = express.Router();
const {
  createGoal,
  readGoals,
  updateGoal,
  deleteGoal,
} = require("../controller/goalController");

router.route("/").get(readGoals).post(createGoal);
router.route("/:id").delete(deleteGoal).put(updateGoal);

module.exports = router;
