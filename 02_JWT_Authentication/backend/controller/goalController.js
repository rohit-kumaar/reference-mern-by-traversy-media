const asyncHandler = require("express-async-handler");

const Goal = require("../models/goalModel");

// CREATE
const createGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  // using goals schema and schema is async function
  const goal = await Goal.create({
    /**
     * Schema name is text IMPORTANT
     */
    text: req.body.text,
  });

  res.status(200).json(goal);
});

// READ
const readGoals = asyncHandler(async (req, res) => {
  // using goals schema and schema is async function
  const goals = await Goal.find();

  res.status(200).json(goals);
});

// UPDATE
const updateGoal = asyncHandler(async (req, res) => {
  // using goals schema
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedGoal);
});

// DELETE
const deleteGoal = asyncHandler(async (req, res) => {
  // using goals schema
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  await goal.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  createGoal,
  readGoals,
  updateGoal,
  deleteGoal,
};
