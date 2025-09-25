import { useState } from "react";
import GameBoard from "./components/gameBoard";
import { Player } from "./components/player";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectedPlayer() {
    setActivePlayer((currentyPlayer) => (currentyPlayer === "X" ? "O" : "X"));
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player name="player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        <GameBoard
          selectedSquare={handleSelectedPlayer}
          activePlayerSymbol={activePlayer}
        />
      </div>
    </main>
  );
}

export default App;
