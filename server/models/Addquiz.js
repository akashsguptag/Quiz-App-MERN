const mongoose = require("mongoose");

const AddQuiz = new mongoose.Schema(
  {
    user: { type:  String, required: true },
    question: { type:  String, required: true },
    optionA: { type:  String, required: true },
    optionB: { type:  String, required: true },
    optionC: { type:  String, required: true },
    optionD: { type:  String, required: true },
    correct: { type:  String, required: true },
    date: { type: Date, default: Date.now },
  },
  { collection: "quiz-list" }
);

const model = mongoose.model("QuizList", AddQuiz);

module.exports = model;
