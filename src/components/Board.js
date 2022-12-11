// components
import Score from "./Score";
import Questions from "./Questions";
import Categories from "./Category";
import Points from "./Points";
import Answers from "./Answer";

export default function Board() {
  return (
    <div className="game-board">
      <Score />
      <Questions />
      <Categories />
      <Points />
      <Answers />
    </div>
  );
}
