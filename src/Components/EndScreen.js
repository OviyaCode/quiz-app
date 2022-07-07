import React,{useContext} from 'react';
import {QuizContext} from "../Helpers/Context";
import {Questions} from "../Helpers/QuestionList";
import "../App.css";


function EndScreen() {
  const {score,setScore,setGame}=useContext(QuizContext);

  const restart =()=>{
    setScore(0)
    setGame("menu")
  }
  
  return (
    <div className='End'>
    {" "}
      <h1>Quiz Finished</h1>
      <h3>{" "}{score}/{Questions.length}{" "}</h3>
      <button onClick={restart} className="custombtn">Restart Quiz</button>
    </div>
  );
}

export default EndScreen;
