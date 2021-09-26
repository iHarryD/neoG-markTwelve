import React from "react";
import "../App.css";
import { useState } from "react";

function TriangleQuiz() {
  const [userScore, setUserScore] = useState("");

  // const allRadioButtons = document.querySelectorAll(".options input"); Didn't work. Why?

  function submitAnswers() {
    const allRadioButtons = document.querySelectorAll(".options input");
    let currentScore = 0;
    allRadioButtons.forEach((radioButton) => {
      if (radioButton.checked) {
        if (radioButton.value === "true") {
          currentScore++;
        }
      }
    });
    setUserScore(
      `You scored ${currentScore} out of 10. Thank your for playing.`
    );
  }

  return (
    <>
      <ol id="questions-div">
        <li className="question-box">
          <p className="question">
            Which on the following triangles have two equal side lengths?
          </p>
          <div className="options">
            <label>
              <input type="radio" name="question-1" value="false" /> Scalene
            </label>

            <label>
              <input type="radio" name="question-1" value="false" /> Isosceles
            </label>

            <label>
              <input type="radio" name="question-1" value="false" /> None of
              these
            </label>
            <label>
              <input type="radio" name="question-1" value="true" /> Equilateral
            </label>
          </div>
        </li>
        <li className="question-box">
          <p className="question">
            The sum of all three sides of a triangle is:
          </p>
          <div className="options">
            <label>
              <input type="radio" name="question-2" value="true" /> 180°
            </label>

            <label>
              <input type="radio" name="question-2" value="false" /> 360°
            </label>

            <label>
              <input type="radio" name="question-2" value="false" /> None of
              these
            </label>
            <label>
              <input type="radio" name="question-2" value="false" /> Can't be
              determined
            </label>
          </div>
        </li>
        <li className="question-box">
          <p className="question">
            How many lines of symmetry does a scalene triangle has?
          </p>
          <div className="options">
            <label>
              <input type="radio" name="question-3" value="true" /> 0
            </label>

            <label>
              <input type="radio" name="question-3" value="false" /> 1
            </label>

            <label>
              <input type="radio" name="question-3" value="false" /> 2
            </label>
            <label>
              <input type="radio" name="question-3" value="false" /> 4
            </label>
          </div>
        </li>
        <li className="question-box">
          <p className="question">
            If ABC is an equilateral triangle, then each angle equals to:
          </p>
          <div className="options">
            <label>
              <input type="radio" name="question-4" value="false" /> 45°
            </label>

            <label>
              <input type="radio" name="question-4" value="false" /> 90°
            </label>

            <label>
              <input type="radio" name="question-4" value="true" /> 60°
            </label>
            <label>
              <input type="radio" name="question-4" value="false" /> 30°
            </label>
          </div>
        </li>
        <li className="question-box">
          <p className="question">
            The sum of all three sides of a triangle is called:
          </p>
          <div className="options">
            <label>
              <input type="radio" name="question-5" value="false" /> Hypotenuse
            </label>

            <label>
              <input type="radio" name="question-5" value="true" /> Perimeter
            </label>

            <label>
              <input type="radio" name="question-5" value="false" /> Radian
            </label>
            <label>
              <input type="radio" name="question-5" value="false" /> None of
              these
            </label>
          </div>
        </li>
        <li className="question-box">
          <p className="question">
            If the perimeter of a triangle is three times of it's first side
            then the triangle is:
          </p>
          <div className="options">
            <label>
              <input type="radio" name="question-6" value="false" /> Isosceles
            </label>

            <label>
              <input type="radio" name="question-6" value="true" /> Equilateral
            </label>

            <label>
              <input type="radio" name="question-6" value="false" /> Scalene
            </label>
            <label>
              <input type="radio" name="question-6" value="false" /> Can't be
              determined
            </label>
          </div>
        </li>
        <li className="question-box">
          <p className="question">
            What's the third angle for the triangle whose angle 1 is 45° and
            angle 2 is 45°?
          </p>
          <div className="options">
            <label>
              <input type="radio" name="question-7" value="true" /> Right
            </label>

            <label>
              <input type="radio" name="question-7" value="false" /> Acute
            </label>

            <label>
              <input type="radio" name="question-7" value="false" /> Obtuse
            </label>
            <label>
              <input type="radio" name="question-7" value="false" /> Can't be
              determined
            </label>
          </div>
        </li>
        <li className="question-box">
          <p className="question">
            The angles opposite to equal sides of a triangle are:
          </p>
          <div className="options">
            <label>
              <input type="radio" name="question-8" value="false" /> Unequal
            </label>

            <label>
              <input type="radio" name="question-8" value="false" />{" "}
              Supplementary Angles
            </label>

            <label>
              <input type="radio" name="question-8" value="true" /> Equal
            </label>
            <label>
              <input type="radio" name="question-8" value="false" />{" "}
              Complementary Angles
            </label>
          </div>
        </li>
        <li className="question-box">
          <p className="question">
            If perimeter of a triangle is 100 cm and the length of two sides are
            30 cm and 40 cm respectively, the length of it's third side will be:
          </p>
          <div className="options">
            <label>
              <input type="radio" name="question-9" value="false" /> 26 cm
            </label>

            <label>
              <input type="radio" name="question-9" value="false" /> 60 cm
            </label>

            <label>
              <input type="radio" name="question-9" value="false" /> 45 cm
            </label>
            <label>
              <input type="radio" name="question-9" value="true" /> 30 cm
            </label>
          </div>
        </li>
        <li className="question-box">
          <p className="question">
            What's the height of an equilateral triangle with sides of 5 cm?
          </p>
          <div className="options">
            <label>
              <input type="radio" name="question-10" value="false" /> 5.12 cm
            </label>

            <label>
              <input type="radio" name="question-10" value="true" /> 4.33 cm
            </label>

            <label>
              <input type="radio" name="question-10" value="false" /> 7 cm
            </label>
            <label>
              <input type="radio" name="question-10" value="false" /> 3.90 cm
            </label>
          </div>
        </li>
      </ol>
      <button id="quiz-submit-btn" onClick={submitAnswers}>
        Submit
      </button>
      <div id="score-div">{userScore}</div>
    </>
  );
}

export default TriangleQuiz;
