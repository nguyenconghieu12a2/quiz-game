/*
MSSV: CE180986
Hoten: Nguyen Cong Hieu
*/
import React, { Component } from "react";
import quizState from "./quizState";
import "../styles/Question.css";
const Score = ({ score }) => {
  return (
    <div className="">
      <h2>Quiz Ended!</h2>
      <p className="result">
        You scored {score} out of {quizState.length}.
      </p>
      <button className="play-again" onClick={() => window.location.reload()}>
        Play Again
      </button>
    </div>
  );
};
export default Score;
