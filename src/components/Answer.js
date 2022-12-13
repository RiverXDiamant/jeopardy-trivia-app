// import components
import { useState } from "react";

export default function Answers({ answer }) {
  const [showAnswer, setShowAnswer] = useState(null);

  const revealAnswer = () => {
    setShowAnswer((toggle) => !toggle);
  };

  return (
    <>
      <div className="game-answers">
        <h2 className="answer">{showAnswer && <h6>Answer:{answer}</h6>}</h2>

        <button onClick={revealAnswer}>Click to Reveal Answer</button>
      </div>
    </>
  );
}
