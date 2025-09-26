export default function Log({ actionsTurns }) {
  return (
    <ol id="log">
      {actionsTurns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          Player {turn.player} selected {turn.square.row}, {turn.square.col}
        </li>
      ))}
    </ol>
  );
}
