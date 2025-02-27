const mongoose = require("mongoose");

const Quiz = new mongoose.Schema(
  {
    user: { type:  String, required: true },
    category: { type: String, required: true },
    difficulty: { type: String, required: true },
    date: { type: Date, default: Date.now },
    score: { type: Number }
  },
  { collection: "quiz-data" }
);

const model = mongoose.model("QuizData", Quiz);

module.exports = model;
