import { useState } from "react";

export function Player({ name, symbol, isActive }) {
  const [IsEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);

  function editAndSave() {
    setIsEditing((editing) => !editing);
  }

  function changeName(event) {
    setNewName(event.target.value);
  }

  let playerName = <span className="player-name">{newName}</span>;
  if (IsEditing)
    playerName = <input type="text" value={newName} onChange={changeName} />;

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editAndSave}>Edit</button>
    </li>
  );
}
