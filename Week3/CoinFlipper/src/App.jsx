import { useState } from "react";
import "./components/CoinFlipperStyles.css";
import "./App.css";
import Coin from "./components/Coin";
import Counter from "./components/Counter";

const options = ["yazi", "tura"];

const getRandomElFromArr = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const randomItem = arr[randomIndex];
  return randomItem;
};
const CoinFlipper = () => {
  const [rotate, setRotate] = useState(false);
  const [headCounter, setHeadCounter] = useState(0);
  const [tailCounter, setTailCounter] = useState(0);
  const [currentStatus, setCurrentStatus] = useState(options[0]);
  const [results, setResults] = useState([]);

  const start = () => {
    setRotate(true);
    const randomElement = getRandomElFromArr(options);
    setTimeout(() => {
      setCurrentStatus(randomElement);
      if (randomElement == options[1]) {
        setHeadCounter(headCounter + 1);
      } else {
        setTailCounter(tailCounter + 1);
      }
      setResults([...results, randomElement]);
      setRotate(false);
    }, 1000);
  };
  const starting = () => {
    if (headCounter + tailCounter > 0) {
      return <p>{currentStatus} Geldi</p>;
    }
  };

  return (
    <div className="container">
      <h1>Yazi ya da Tura</h1>
      <br />
      <Coin currentStatus={currentStatus} rotate={rotate} />
      <br />
      <button onClick={start}>Atis Yap</button>

      <Counter
        headCounter={headCounter}
        tailCounter={tailCounter}
        currentStatus={currentStatus}
      />
      <p>Toplam {headCounter + tailCounter} atış yapıldı </p>
      <p>{headCounter} kez tura geldi</p>
      <p>{tailCounter} kez yazı geldi</p>

      {/* Tura geldi

      Toplam 24 atış yapıldı

      11 kez Yazı geldi

      13 kez Tura geldi */}
    </div>
  );
};

export default CoinFlipper;
