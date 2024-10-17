/*
MSSV: CE180986
Hoten: Nguyen Cong Hieu
*/
import React from "react";
import "../styles/Question.css";

const Question = ({
  question,
  options,
  selectOption,
  onOptionSelect,
  onSubmit,
}) => {
  return (
    <>
      <div className="formGroup">
        <h2>{question}</h2>
        <div className="formGroup-2">
          <div class="custom-radio-group">
            {options.map((Option, i) => (
              <label class="custom-radio-container">
                <input
                  type="radio"
                  name="custom-radio"
                  value={Option}
                  checked={selectOption === Option}
                  onChange={() => onOptionSelect(Option)}
                />
                <span class="custom-radio-checkmark"></span>
                {Option}
              </label>
            ))}
          </div>
        </div>
      </div>
      <div className="buttonn">
        <button onClick={onSubmit} disabled={!selectOption}>
          <span className="text">Submit</span>
        </button>
      </div>
    </>
  );
};

export default Question;
