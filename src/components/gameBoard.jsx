import { useState } from "react";

const initialGameboard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ selectedSquare, activePlayerSymbol }) {
  const [gameBoard, setGameBoard] = useState(initialGameboard);

  function handleSelectSquare(rowIndex, colIndex) {
    
    setGameBoard((previousGameBoard) => {
      const updatedBoard = [
        ...previousGameBoard.map((innerArray) => [...innerArray]),
      ];
      updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
      return updatedBoard;
    });

    selectedSquare();
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
