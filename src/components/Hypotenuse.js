import React from "react";
import { useState } from "react";

function Hypotenuse() {
  const [base, setBase] = useState(0);
  const [height, setHeight] = useState(0);
  const [result, setResult] = useState("");

  const errorMessage = "Values can't be negavtive or zero.";

  function calculateHypotenuse() {
    let currentHypotenuse = Math.sqrt(Number(base) ** 2 + Number(height) ** 2);
    if (base <= 0 || height <= 0) {
      setResult(errorMessage);
    } else {
      setResult(
        `Hypotenuse' length is ${currentHypotenuse.toFixed(5)} heron's unit.`
      );
    }
  }

  return (
    <>
      <div className="formula-div">
        Formula: Hypotenuse = √(base² + height²)
      </div>
      <div className="h-input-div">
        <label htmlFor="base">
          Enter base value:
          <input
            type="number"
            id="base"
            onChange={(event) => {
              setBase(event.target.value);
            }}
          />
        </label>
      </div>
      <div className="h-input-div">
        <label htmlFor="height">
          Enter height value:
          <input
            type="number"
            id="height"
            onChange={(event) => {
              setHeight(event.target.value);
            }}
          />
        </label>
      </div>
      <button onClick={calculateHypotenuse}>Calculate</button>
      <div id="h-output-div">{result}</div>
    </>
  );
}

export default Hypotenuse;
