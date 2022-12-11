export default function Score() {
  return (
    <div className="score-counter">
      <h2>
        <strong>Score:</strong>
      </h2>
      <div className="score-buttons">
        <button id="score-decrease">Decrease</button>
        <button id="score-increase">Increase</button>
        <button id="score-reset">Reset</button>
      </div>
    </div>
  );
}
