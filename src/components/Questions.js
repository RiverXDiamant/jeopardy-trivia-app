// components
import { useState, useEffect } from "react";

import Categories from "./Category";
import Points from "./Points";
import Answers from "./Answer";

export default function Question(props) {
  const url = "https://jservice.io/api/random";

  const [question, setQuestion] = useState(null);

  const getQuestion = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setQuestion(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getQuestion();
  });
  const [showQuestion, setShowQuestion] = useState(null);

  const revealQuestion = () => {
    setShowQuestion((toggle) => !toggle);
  };

  return (
    <div className="get-question">
      <h2>Let's Play! </h2>

      <h2>{showQuestion && <h6>Question:{question}</h6>}</h2>
      <button onClick={revealQuestion}>Get Question</button>
      <Categories />
      <Points />
      <Answers />
    </div>
  );
}
