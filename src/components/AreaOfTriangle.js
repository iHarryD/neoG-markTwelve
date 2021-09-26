import React from "react";
import { useState } from "react";

function AreaOfTriangle() {
  const [angleOne, setAngleOne] = useState(0);
  const [angleTwo, setAngleTwo] = useState(0);
  const [angleThree, setAngleThree] = useState(0);
  const [result, setResult] = useState("");

  function takingValue(event, setter) {
    let value = event.target.value;
    if (value < 0) {
      alert("Length can't be negative.");
    } else {
      setter(value);
    }
  }

  function calculateArea() {
    let anglesArray = [
      Number(angleOne),
      Number(angleTwo),
      Number(angleThree),
    ].sort();
    console.log(anglesArray);
  }

  return (
    <>
      <div className="aot-input-div">
        <label htmlFor="angle-1">
          Angle 1
          <input
            type="number"
            id="angle-1"
            placeholder="0"
            onChange={(event) => {
              takingValue(event, setAngleOne);
            }}
          />
        </label>
      </div>
      <div className="aot-input-div">
        <label htmlFor="angle-2">
          Angle 2
          <input
            type="number"
            id="angle-2"
            placeholder="0"
            onChange={(event) => {
              takingValue(event, setAngleTwo);
            }}
          />
        </label>
      </div>
      <div className="aot-input-div">
        <label htmlFor="angle-3">
          Angle 3
          <input
            type="number"
            id="angle-3"
            placeholder="0"
            onChange={(event) => {
              takingValue(event, setAngleThree);
            }}
          />
        </label>
      </div>
      <button onClick={calculateArea}>Calculate</button>
      <div id="aot-output-div">Area of Triangle is: {result}</div>
    </>
  );
}

export default AreaOfTriangle;
