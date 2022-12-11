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

  const handleReset = () => {
    setScore(0);
  };
  return (
    <div className="score-counter">
      <h2>
        <strong>Score: {score}</strong>
      </h2>
      <div className="score-buttons">
        <button
          aria-label="decrease score"
          id="decrease"
          onClick={handleDecrement}
        >
          Decrease
        </button>
        <button
          aria-label="increase score"
          id="increase"
          onClick={handleIncrement}
        >
          Increase
        </button>
        <button aria-label="reset score" id="reset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}
