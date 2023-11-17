import { useState } from "react";
import "./App.css";
import DicePrinter from "./components/DicePrinter";

const d4Array = ["d41", "d42", "d43", "d44"];
const d6Array = ["d61", "d62", "d63", "d64", "d65", "d66"];
const d8Array = ["d81", "d82", "d83", "d84", "d85", "d86", "d87", "d88"];
function randomDice(diceType) {
  if (diceType == "D4") {
    return d4Array[Math.floor(Math.random() * d4Array.length)];
  } else if (diceType == "D6") {
    return d6Array[Math.floor(Math.random() * d6Array.length)];
  } else if (diceType == "D8") {
    return d8Array[Math.floor(Math.random() * d8Array.length)];
  } else {
    console.log("WARNING!!!");
  }
}

function App() {
  const [diceType, setDiceType] = useState("");
  const [diceResult, setDiceResult] = useState("");

  const handleClickD4 = () => {
    setDiceType("D4");
    // randomDice(diceType);
    // console.log("d4 dice rolled: " + randomDice(diceType));
    console.log("D4 Selected");
  };
  const handleClickD6 = () => {
    setDiceType("D6");
    // randomDice(diceType);
    // console.log("d6 dice rolled: " + randomDice(diceType));
    console.log("D6 Selected");
  };
  const handleClickD8 = () => {
    setDiceType("D8");
    // randomDice(diceType);
    // console.log("d8 dice rolled: " + randomDice(diceType));
    console.log("D8 Selected");
  };
  const handleRollButton = () => {
    const result = randomDice(diceType);
    setDiceResult(result);
    console.log(`${diceType} Rolled : ${result}`);
  };
  return (
    <div className="root">
      <h1>Welcome to Dice Roller!</h1>
      <h3>Please choose the type of dice</h3>
      <button onClick={handleClickD4}>D4</button>
      <button onClick={handleClickD6}>D6</button>
      <button onClick={handleClickD8}>D8</button>
      <div>
        <button onClick={handleRollButton}>Roll</button>
        <DicePrinter diceResult={diceResult} />
      </div>
    </div>
  );
}

export default App;
