// components
// import React from "react";
import { useState } from "react";

import Categories from "./Category";
import Points from "./Points";
import Answers from "./Answer";

export default function GetQuestion() {
  const [question, setQuestion] = useState(null);

  const getQuestion = async () => {
    const response = await fetch(" https://jservice.io/api/random");
    const data = await response.json();
    setQuestion(data);
  };
  return (
    <div className="get-question">
      <h2>Let's Play! </h2>

      <h2>Question: {question}</h2>
      <button onClick={getQuestion}>Get Question</button>
      <Categories />
      <Points />
      <Answers />
    </div>
  );
}
