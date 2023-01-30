import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Loader from "react-loader-spinner";
import "./AddQuiz.css";

function AddQuiz() {
  const history = useHistory();
  const location = useLocation();
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState("");
  const [optionA, setOA] = useState("");
  const [optionB, setOB] = useState("");
  const [optionC, setOC] = useState("");
  const [optionD, setOD] = useState("");

  useEffect(() => {

  }, []);

  async function handleResult() {

  }

  async function handleSubmit(e) {

  }

  function handleChange(e) {
    const { name, value } = e.target;
    switch (name) {
      case "question":
        setQuestion(value);
        break;
      case "optionA":
        setOA(value);
        break;
      case "optionB":
        setOB(value);
        break;
      case "optionC":
        setOC(value);
        break;
      case "optionD":
        setOD(value);
        break;
      default:
        break;
    }
  }

  return (
    <div>
      {loading ? (
        <Loader
          className="loader"
          type="Grid"
          color="#fff"
          height={100}
          width={100}
        />
      ) : (
        <div>

          <h1 className="heading">The Programmer's Quiz 👩‍💻</h1>
          <form className="registerForm" onSubmit={handleSubmit}>
          <div className="question">
              <span>Add Question</span>
            </div>
              <textarea name="question"

                onChange={handleChange}
                rows="5"
                placeholder="Write your question here."
                value={question} />
              <input
                type="text"
                name="optionA"
                value={optionA}
                placeholder="Option A"
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="optionB"
                value={optionB}
                onChange={handleChange}
                placeholder="Option B"
                required
              />
              <input
                type="text"
                name="optionC"
                value={optionC}
                onChange={handleChange}
                placeholder="Option C"
                required
              />
              <input
                type="text"
                name="optionD"
                value={optionD}
                onChange={handleChange}
                placeholder="Option D"
                required
              />
              <br />
              <button className="sub-button" type="submit">Save</button>
              {error && <div className="error">{errorMsg}</div>}
            </form>
          
        </div>
      )}
    </div>
  );
}

export default AddQuiz;
