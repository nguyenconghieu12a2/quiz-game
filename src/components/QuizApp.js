/*
MSSV: CE180986
Hoten: Nguyen Cong Hieu
*/
import React, { useState } from "react";
import Question from "./Question";
import Score from "./Score";
import quizState from "./quizState";

const QuizApp = () => {
  const [isComplete, setIsComplete] = useState(false);
  const [current, setCurrent] = useState(0);
  const [selectOption, setSelectOption] = useState("");
  const [score, setScore] = useState(0);

  const handleOptionSelect = (option) => {
    setSelectOption(option);
  };

  const handleSubmit = () => {
    if (selectOption === quizState[current].answer) {
      setScore(score + 1);
    }
    if (current + 1 < quizState.length) {
      setCurrent(current + 1);
      setSelectOption("");
    } else {
      setIsComplete(true);
    }
  };
  return (
    <>
      <div className="formGroup">
        {!isComplete ? (
          <div>
            <h1>Question {current + 1}</h1>
            <Question
              question={quizState[current].question}
              options={quizState[current].options}
              selectOption={selectOption}
              onOptionSelect={handleOptionSelect}
              onSubmit={handleSubmit}
            />
          </div>
        ) : (
          <Score score={score} />
        )}
      </div>
    </>
  );
};

export default QuizApp;
