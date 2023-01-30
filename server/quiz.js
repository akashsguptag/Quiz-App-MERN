require("dotenv").config();
const axios = require("axios");
// const api = process.env.QUIZ_API_TOKEN;

// Funtion to fetch quiz questions
async function fetchQuizQuestions(category, difficulty, limit = 10) {
  let response = "";
  if (category === "Random") {
    response = await axios.get(
      `https://quizapi.io/api/v1/questions?apiKey=tbAwtK5bLgMdJgNhxWtGvsk2fxwirTZ8b6hpW6dy&questions1`
    );
  } else {
    response = await axios.get(
      `https://quizapi.io/api/v1/questions?apiKey=tbAwtK5bLgMdJgNhxWtGvsk2fxwirTZ8b6hpW6dy&questions1`
    );
  }

  const quizData = await response.data;
  return quizData;
}

module.exports = fetchQuizQuestions;
