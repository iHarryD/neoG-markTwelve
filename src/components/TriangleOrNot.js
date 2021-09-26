import React from "react";
import { useState } from "react";

function TriangleOrNot() {
  const [result, setResult] = useState("Triangle or Not");

  const [angleOne, setAngleOne] = useState(0);
  const [angleTwo, setAngleTwo] = useState(0);
  const [angleThree, setAngleThree] = useState(0);

  function takingValue(event, setter) {
    let value = event.target.value;
    if (value < 0) {
      alert("Angles can't be negative.");
    } else {
      setter(value);
    }
  }

  function showResult() {
    let allAngles = [angleOne, angleTwo, angleThree];
    let sumOfAllAngles = 0;
    allAngles.forEach((angle) => {
      sumOfAllAngles = sumOfAllAngles + Number(angle);
    });

    allAngles.forEach((angle) => {
      if (angle === 0) {
        setResult("It's not a triangle.");
      } else if (sumOfAllAngles === 180) {
        setResult("It's a TRIANGLE!");
      }
    });
  }

  return (
    <>
      <div className="ton-input-div">
        <label htmlFor="angle-1">Angle 1</label>
        <input
          type="number"
          id="angle-1"
          placeholder="0"
          onChange={(event) => {
            takingValue(event, setAngleOne);
          }}
        />
      </div>
      <div className="ton-input-div">
        <label htmlFor="angle-2">Angle 2</label>
        <input
          type="number"
          id="angle-2"
          placeholder="0"
          onChange={(event) => {
            takingValue(event, setAngleTwo);
          }}
        />
      </div>
      <div className="ton-input-div">
        <label htmlFor="angle-3">Angle 3</label>
        <input
          type="number"
          id="angle-3"
          placeholder="0"
          onChange={(event) => {
            takingValue(event, setAngleThree);
          }}
        />
      </div>
      <button onClick={showResult}>Check</button>
      <div id="ton-output-div">{result}</div>
    </>
  );
}

export default TriangleOrNot;
