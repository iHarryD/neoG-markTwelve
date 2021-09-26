import React from "react";
import "../App.css";
import { useState } from "react";

function TriangleQuiz() {
  const [userScore, setUserScore] = useState(0);

  const allRadioButtons = document.querySelectorAll(".options input");

  function submitAnswers() {
    let currentScore = 0;
    allRadioButtons.forEach((radioButton) => {
      console.log("radio button");
      if (radioButton.checked) {
        console.log("only checked");
        if (radioButton.value === "true") {
          console.log("checked and correct");
          currentScore++;
        }
      }
    });
    console.log(currentScore);
    setUserScore(currentScore);
  }

  return (
    <>
      <ol id="questions-div">
        <li className="question-box">
          <p className="question">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            asperiores!
          </p>
          <div className="options">
            <label>
              <input type="radio" name="question-1" value="true" /> Lorem1
            </label>

            <label>
              <input type="radio" name="question-1" value="false" /> Lorem2
            </label>

            <label>
              <input type="radio" name="question-1" value="false" /> Lorem3
            </label>
            <label>
              <input type="radio" name="question-1" value="false" /> Lorem4
            </label>
          </div>
        </li>
        <li className="question-box">
          <p className="question">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            asperiores!
          </p>
          <div className="options">
            <label>
              <input type="radio" name="question-2" value="true" /> Lorem1
            </label>

            <label>
              <input type="radio" name="question-2" value="false" /> Lorem2
            </label>

            <label>
              <input type="radio" name="question-2" value="false" /> Lorem3
            </label>
            <label>
              <input type="radio" name="question-2" value="false" /> Lorem4
            </label>
          </div>
        </li>
        <li className="question-box">
          <p className="question">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            asperiores!
          </p>
          <div className="options">
            <label>
              <input type="radio" name="question-3" value="true" /> Lorem1
            </label>

            <label>
              <input type="radio" name="question-3" value="false" /> Lorem2
            </label>

            <label>
              <input type="radio" name="question-3" value="false" /> Lorem3
            </label>
            <label>
              <input type="radio" name="question-3" value="false" /> Lorem4
            </label>
          </div>
        </li>
      </ol>
      <button id="quiz-submit-btn" onClick={submitAnswers}>
        Submit
      </button>
      <div id="score-div">
        You scored {userScore} out of 10. Thank your for playing.
      </div>
    </>
  );
}

export default TriangleQuiz;
