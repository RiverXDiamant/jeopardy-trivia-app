// components
import Score from "./Score";
import GetQuestion from "./Questions";

export default function Board() {
  return (
    <div className="game-board">
      <Score />
      <GetQuestion />
    </div>
  );
}
