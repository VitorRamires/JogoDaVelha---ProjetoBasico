import { useState } from "react";
import GameBoard from "./components/gameBoard";
import { Player } from "./components/player";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning_combination";
import GameOver from "./components/gameOver";

const initialGameboard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  let gameBoard = [...initialGameboard.map((array) => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  let winner;

  // looping em combinação de vitorias, onde temos que guardar os simbolos
  // que formam a vitória. Para isso acessamos o quadrado do gameBoard que
  // está relacionado ao primeiro elemento, segundo e terceiro elemento da
  // combinação de vitória.
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      thirdSquareSymbol === firstSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectedPlayer(rowIndex, colIndex) {
    setActivePlayer((currentyPlayer) => (currentyPlayer === "X" ? "O" : "X"));
    let currentPlayer = "X";

    setGameTurns((prevTurn) => {
      if (prevTurn.lenght > 0 && prevTurn[0].player === "X") {
        currentPlayer = "O";
      }

      const updateTurn = [
        { square: { row: rowIndex, col: colIndex }, player: activePlayer },
        ...prevTurn,
      ];
      return updateTurn;
    });
  }

  function handleRematch() {
    setGameTurns([]);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player name="player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        {(winner || hasDraw) && <GameOver onRestart={handleRematch} winner={winner} />}
        <GameBoard board={gameBoard} selectedSquare={handleSelectedPlayer} />
      </div>
      <Log actionsTurns={gameTurns} />
    </main>
  );
}

export default App;
