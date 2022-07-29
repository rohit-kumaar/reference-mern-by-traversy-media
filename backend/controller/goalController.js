const asyncHandler = require("express-async-handler");

const createGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  res.status(200).json({ message: "Create goal" });
});

const readGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Read goals" });
});

const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

module.exports = {
  createGoal,
  readGoals,
  updateGoal,
  deleteGoal,
};
