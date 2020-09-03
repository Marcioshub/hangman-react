import React, { useEffect } from "react";
import { checkWin } from "../helpers/Helpers";

export default function Popup({
  correctLetters,
  wrongLetters,
  selectedWord,
  setPlayable,
  playAgain,
}) {
  let finalMessage = "";
  let finalMessageRevealWord = "";
  let playable = true;

  if (checkWin(correctLetters, wrongLetters, selectedWord.word) === "win") {
    finalMessage = `Congratulations! You have won! 😀\n ${selectedWord.word}`;
    playable = false;
  } else if (
    checkWin(correctLetters, wrongLetters, selectedWord.word) === "lose"
  ) {
    finalMessage = "Sorry you have lost 🙁";
    finalMessageRevealWord = `... the word was: ${selectedWord.word}`;
    playable = false;
  }

  useEffect(() => setPlayable(playable));

  return (
    <div
      className="popup-container"
      style={finalMessage !== "" ? { display: "flex" } : {}}
    >
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <h4>Definition: {selectedWord.definition}</h4>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  );
}
