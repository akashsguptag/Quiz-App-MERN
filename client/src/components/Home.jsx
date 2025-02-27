import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Loader from "react-loader-spinner";
import jwt from "jsonwebtoken";
import "./Home.css";

function Home() {
  const [category, setCategory] = useState("Random");
  const [difficulty, setDifficulty] = useState("Easy");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function handleSelect(event) {
    const { name, value } = event.target;
    if (name === "category") {
      setCategory(value);
    } else {
      setDifficulty(value);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    const req = await fetch("http://localhost:80/api/quiz", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        category: category,
        difficulty: difficulty,
      }),
    });

    const data = await req.json();
    setLoading(false);
    if (data.status === "ok") {
      history.push({
        pathname: "/quiz",
        state: {
          quizId: data.quizId,
          quizData: data.quizData,
        },
      });
    } else {
      setError(true);
      setErrorMsg(data.message);
      setTimeout(() => {
        history.push({
          pathname: "/login",
        });
      }, 1000);
      return;
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const email = jwt.decode(token);
      if (!email) {
        localStorage.removeItem("token");
        history.replace("/login");
      }
      if (Date.now() > jwt.decode(token).exp * 1000) {
        localStorage.removeItem("token");
        history.replace("/login");
      }
    } else {
      localStorage.removeItem("token");
      history.replace("/login");
    }
  }, []);

  function viewHistory(){
    history.push({
      pathname: "/history",
    });
  }

  return (
    <div className="home">
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
          <h1 className="heading">Welcome to Quiz Web Application</h1>
          <p className="heading2">Here is way to start</p>
          <div className="form">
            <label htmlFor="category">Simple Quiz</label>
            <br />
            <button className="start" type="submit" onClick={handleSubmit}>
              Start Quiz
            </button>
            {error && <div className="error">{errorMsg}</div>}
          </div>
          
          <div className="btns">
            <button
              className="logout"
              onClick={() => {localStorage.removeItem("token");history.push("/login")}}
            >
              Logout
            </button>
            <button className="history" onClick={viewHistory}>View History</button>
            </div>
        </div>
      )}
    </div>
  );
}

export default Home;
