import d41 from "../images/d4/d41.jpg";
import d42 from "../images/d4/d42.jpg";
import d43 from "../images/d4/d43.jpg";
import d44 from "../images/d4/d44.jpg";
import d61 from "../images/d6/d61.jpg";
import d62 from "../images/d6/d62.jpg";
import d63 from "../images/d6/d63.jpg";
import d64 from "../images/d6/d64.jpg";
import d65 from "../images/d6/d65.jpg";
import d66 from "../images/d6/d66.jpg";
import d81 from "../images/d8/d81.jpg";
import d82 from "../images/d8/d82.jpg";
import d83 from "../images/d8/d83.jpg";
import d84 from "../images/d8/d84.jpg";
import d85 from "../images/d8/d85.jpg";
import d86 from "../images/d8/d86.jpg";
import d87 from "../images/d8/d87.jpg";
import d88 from "../images/d8/d88.jpg";

const diceMapping = {
  d41,
  d42,
  d43,
  d44,
  d61,
  d62,
  d63,
  d64,
  d65,
  d66,
  d81,
  d82,
  d83,
  d84,
  d85,
  d86,
  d87,
  d88,
};

function DicePrinter({ diceResult }) {
  return (
    <div className="printer">
      <img src={diceMapping[diceResult]}></img>
    </div>
  );
}

export default DicePrinter;
