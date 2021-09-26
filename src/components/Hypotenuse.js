import React from "react";
import { useState } from "react";

function Hypotenuse() {
  const [base, setBase] = useState(0);
  const [height, setHeight] = useState(0);
  const [result, setResult] = useState("");

  function takingValue(event, setter) {
    let value = event.target.value;
    if (value < 0) {
      alert("Length can't be negative.");
    } else {
      setter(value);
    }
  }

  function calculateHypotenuse() {
    let currentHypotenuse = Math.sqrt(Number(base) ** 2 + Number(height) ** 2);
    setResult(currentHypotenuse);
  }

  return (
    <>
      <div className="h-input-div">
        <label htmlFor="base">
          Enter base value:
          <input
            type="number"
            id="base"
            placeholder="0"
            onChange={(event) => {
              takingValue(event, setBase);
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
            placeholder="0"
            onChange={(event) => {
              takingValue(event, setHeight);
            }}
          />
        </label>
      </div>
      <button onClick={calculateHypotenuse}>Calculate</button>
      <div id="h-output-div">Hypotenuse' length is: {result}</div>
    </>
  );
}

export default Hypotenuse;
