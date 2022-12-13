// components
// import React from "react";
import { useState } from "react";

import Categories from "./Category";
import Points from "./Points";
import Answers from "./Answer";
// import component

export default function GetQuestion() {
  const [question, setQuestion] = useState(null);

  const fetchQuestion = async () => {
    const response = await fetch(" https://jservice.io/api/random");
    const data = await response.json();
    setQuestion(data);
  };
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
