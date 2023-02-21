import React from "react";
import "./Board.css";
import "../../Global/global.css";
import { MoreHorizontal } from "react-feather";

const Board = () => {
  return (
    <div className="board">
      <div className="board_top">
        <p>
          To Do <span>2</span> <MoreHorizontal />
        </p>
      </div>
      <div className="board_cards">
        <h3>Cards 1</h3>
        <h3>Cards 2</h3>
        <h3>Cards 2</h3>
      </div>
    </div>
  );
};

export default Board;
