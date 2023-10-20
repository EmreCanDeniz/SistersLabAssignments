import { useState } from "react";
import "./App.css";
import Sprinter from "./assets/components/Sprinter";
import Sorting from "./assets/components/Sort";

const pokemons = [
  { id: 3, name: "Bulbasaur", type: "Grass", experience: 64 },
  { id: 7, name: "Charmander", type: "Fire", experience: 62 },
  { id: 13, name: "Squirtle", type: "Water", experience: 63 },
  { id: 56, name: "Caterpie", type: "Bug", experience: 39 },
  { id: 1408, name: "Ekans", type: "Poison", experience: 58 },
  { id: 63, name: "Eevee", type: "Normal", experience: 65 },
  { id: 27, name: "Pikachu", type: "Electric", experience: 112 },
  { id: 31, name: "Pidgey", type: "Flying", experience: 50 },
  { id: 21, name: "Meowth", type: "Normal", experience: 58 },
  { id: 22, name: "Snorlax", type: "Normal", experience: 154 },
  { id: 35, name: "Psyduck", type: "Water", experience: 64 },
];

function App() {
  const [isClicked, setIsClicked] = useState(true);
  const clickHandler = () => {
    setIsClicked(!isClicked);
    console.log(isClicked);
  };
  const sortelenburg = Sorting([...pokemons]); //kopyaladik
  const sortedMyArray =
    isClicked === true
      ? pokemons.map((spokemon, i) => {
          return <Sprinter spokemon={spokemon} key={i} />;
        })
      : sortelenburg.map((spokemon, i) => {
          return <Sprinter spokemon={spokemon} key={i} />;
        });
  return (
    <div className="container">
      <button onClick={clickHandler}>
        {isClicked === true ? "Sort" : "Unsort"}
      </button>
      {sortedMyArray}
    </div>
  );
}

export default App;
