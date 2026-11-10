import { useEffect, useState } from "react";
import Row from "./components/Row";
import type { blockProps, Mark } from "./components/Block";

const App = () => {
  const [board, setBoard] = useState<(Mark | null)[]>(Array(9).fill(null));
  const [currentTurn, setCurrentTurn] = useState<Mark>("X");
  const [isWon, setIsWon] = useState(false);

  const [player1Text, setPlayer1Text] = useState("Player 1 [X]");
  const [player2Text, setPlayer2Text] = useState("Player 2 [O]");

  useEffect(() => {
    console.log("board: ", board);
    checkGameStatus();
  }, [board]);

  const swapTurn = () => {
    setCurrentTurn((turn) => (turn === "X" ? "O" : "X"));
  };

  const handleClick = (clickedCellIndex: number) => {
    if (board[clickedCellIndex] !== null) return;
    if (isWon) return;

    setBoard((currentBoard) =>
      currentBoard.map((mark, index) => (clickedCellIndex === index ? currentTurn : mark)),
    );
    swapTurn();
  };

  const blocks: blockProps[] = board.map((value, index) => ({
    index,
    value,
    onClick: handleClick,
  }));

  const checkGameStatus = () => {
    const winningPositions = [
      // rows
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      // columns
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      // diagonal
      [0, 4, 8],
      [2, 4, 6],
    ];

    let hasWinner = false;
    winningPositions.forEach((position) => {
      const c1 = board[position[0]];
      const c2 = board[position[1]];
      const c3 = board[position[2]];

      if (c1 !== null && c1 === c2 && c2 === c3) {
        hasWinner = true;
        console.log("WINNER", currentTurn == "O" ? "X" : "O");
        setIsWon(true);
        // text is in reverse order because the turn has already swapped before win checks
        if (currentTurn == "X") {
          setPlayer2Text("Player 2 WON");
        } else {
          setPlayer1Text("Player 1 WON");
        }
        swapTurn();
        return;
      }
    });

    if (!hasWinner && board.every((cell) => cell !== null)) {
      console.log("DRAW", currentTurn == "O" ? "X" : "O");
      setIsWon(true);
      setPlayer1Text("DRAW");
      setPlayer2Text("DRAW");
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setPlayer1Text("Player 1 [X]");
    setPlayer2Text("Player 2 [O]");
    setCurrentTurn("X");
    setIsWon(false);
    console.info("game successfully reset");
  };

  return (
    <div className="container-fluid min-vh-100 min-vw-100 bg-primary d-flex flex-column align-items-center justify-content-center user-select-none">
      <div className="d-flex gap-5">
        <h2 className={currentTurn === "X" ? "fw-bold" : "fw-light"}>{player1Text}</h2>
        <h2 className={currentTurn === "O" ? "fw-bold" : "fw-light"}>{player2Text}</h2>
      </div>
      <div>
        {[0, 1, 2].map((rowIndex) => (
          <Row key={rowIndex} blocks={blocks.slice(rowIndex * 3, rowIndex * 3 + 3)} />
        ))}
      </div>
      <button
        className={`btn btn-lg btn-warning ${isWon && "visible"}`}
        style={{ visibility: "hidden" }}
        onClick={resetGame}
      >
        Reset
      </button>
    </div>
  );
};

export default App;
