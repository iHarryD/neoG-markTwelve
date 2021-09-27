import React from "react";
import { useState } from "react";

function AreaOfTriangle() {
  const [sideOne, setSideOne] = useState(0);
  const [sideTwo, setSideTwo] = useState(0);
  const [sideThree, setSideThree] = useState(0);
  const [result, setResult] = useState("");

  const errorMessage = "Please fill all the fields with valid inputs.";

  function calculateArea(event) {
    event.preventDefault();
    let semiPerimeter =
      (Number(sideOne) + Number(sideTwo) + Number(sideThree)) / 2;
    let area = Math.sqrt(
      semiPerimeter *
        ((semiPerimeter - sideOne) *
          (semiPerimeter - sideTwo) *
          (semiPerimeter - sideThree))
    );
    if (sideOne <= 0 || sideTwo <= 0 || sideThree <= 0 || isNaN(area)) {
      setResult(errorMessage);
    } else {
      setResult(`Area of Triangle is ${area.toFixed(5)}`);
    }
  }

  return (
    <>
      <div className="formula-div">Formula: Area = √[s(s-a)(s-b)(s-c)]</div>
      <div className="aot-input-div">
        <label htmlFor="side-1">
          Side 1
          <input
            type="number"
            id="side-1"
            required
            onChange={(event) => {
              setSideOne(event.target.value);
            }}
          />
        </label>
      </div>
      <div className="aot-input-div">
        <label htmlFor="side-2">
          Side 2
          <input
            type="number"
            id="side-2"
            required
            onChange={(event) => {
              setSideTwo(event.target.value);
            }}
          />
        </label>
      </div>
      <div className="aot-input-div">
        <label htmlFor="side-3">
          Side 3
          <input
            type="number"
            id="side-3"
            required
            onChange={(event) => {
              setSideThree(event.target.value);
            }}
          />
        </label>
      </div>
      <button
        onClick={(event) => {
          calculateArea(event);
        }}
      >
        Calculate
      </button>
      <div id="aot-output-div">{result}</div>
    </>
  );
}

export default AreaOfTriangle;
