import { useState } from "react";
import GameBoard from "./components/gameBoard";
import { Player } from "./components/player";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning_combination";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);


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

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player name="player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        <GameBoard turns={gameTurns} selectedSquare={handleSelectedPlayer} />
      </div>
      <Log actionsTurns={gameTurns} />
    </main>
  );
}

export default App;
