// components
import Score from "./Score";
import Questions from "./Questions";

export default function Board() {
  return (
    <div className="game-board">
      <Score />
      <Questions />
    </div>
  );
}
