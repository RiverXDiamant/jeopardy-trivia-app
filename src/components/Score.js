import React from "react";
// import useState
import { useState } from "react";

export default function Score() {
  const [score, setScore] = useState(0);
  // score - state
  // setScore = updated score amount

  // event handles
  const handleDecrement = () => {
    setScore(score - 100);
  };

  const handleIncrement = () => {
    setScore(score + 100);
  };
  return (
    <div className="score-counter">
      <h2>
        <strong>Score: {score}</strong>
      </h2>
      <div className="score-buttons">
        <button id="score-decrease" onClick={handleDecrement}>
          Decrease
        </button>
        <button id="score-increase" onClick={handleIncrement}>
          Increase
        </button>
        <button id="score-reset">Reset</button>
      </div>
    </div>
  );
}
