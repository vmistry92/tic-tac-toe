import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    // THIS IS BAD PRACTICE as it is scheduled by React in the future it is not instant
    // setIsEditing(!isEditing); //isEditing is delayed 
    // setIsEditing(!isEditing); //isEditing is using the old value hasn't been changed yet

    // Instead a function should be used this is best practice to get most up to date value
    setIsEditing(editing => !editing)  
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let btnCaption = "Edit";

  if (isEditing) {
    editablePlayerName = <input type="text" value={playerName} onChange={handleChange} required></input>;
    btnCaption = "Save";
  }

  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
}
