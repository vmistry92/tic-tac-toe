export default function GameOver({ winner, onRestart }) {
  const winningText = winner ? <p>{winner} won!</p> : <p>It's a draw!</p>;
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winningText}
      <p>
        <button onClick={onRestart}>Rematch!</button>
      </p>
    </div>
  );
}
