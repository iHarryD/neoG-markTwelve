import React from "react";
import { useState } from "react";

function TriangleOrNot() {
  const [result, setResult] = useState("Triangle or Not");
  const [angleOne, setAngleOne] = useState(0);
  const [angleTwo, setAngleTwo] = useState(0);
  const [angleThree, setAngleThree] = useState(0);

  const errorMessage = "Values can't be negative or zero.";

  function showResult() {
    let allAngles = [angleOne, angleTwo, angleThree];
    let sumOfAllAngles = 0;
    allAngles.forEach((angle) => {
      sumOfAllAngles = sumOfAllAngles + Number(angle);
    });

    if (angleOne <= 0 || angleTwo <= 0 || angleThree <= 0) {
      setResult(errorMessage);
    } else {
      if (sumOfAllAngles === 180) {
        setResult("It's a TRIANGLE!");
      } else {
        setResult("It's not a triangle.");
      }
    }
  }

  return (
    <>
      <div className="ton-input-div">
        <label htmlFor="angle-1">Angle 1</label>
        <input
          type="number"
          id="angle-1"
          onChange={(event) => {
            setAngleOne(event.target.value);
          }}
        />
      </div>
      <div className="ton-input-div">
        <label htmlFor="angle-2">Angle 2</label>
        <input
          type="number"
          id="angle-2"
          onChange={(event) => {
            setAngleTwo(event.target.value);
          }}
        />
      </div>
      <div className="ton-input-div">
        <label htmlFor="angle-3">Angle 3</label>
        <input
          type="number"
          id="angle-3"
          onChange={(event) => {
            setAngleThree(event.target.value);
          }}
        />
      </div>
      <button onClick={showResult}>Check</button>
      <div id="ton-output-div">{result}</div>
    </>
  );
}

export default TriangleOrNot;
