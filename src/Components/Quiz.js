import React,{useState, useContext} from 'react';
import {Questions} from "../Helpers/QuestionList"
import {QuizContext} from '../Helpers/Context';
export default function Quiz() {

  const { score, setScore, setGame }= useContext(QuizContext);

  const [curQues,setCurQues]=useState(0);
  const [optionChosen,setOptionChosen]=useState("");

  
  const nextQuestion = () =>{
    if(Questions[curQues].answer == optionChosen){
      setScore(score + 1);
    }
    setCurQues(curQues+1);
  }

  const finishQuiz = () =>{
      if(Questions[curQues].answer == optionChosen){
        setScore(score + 1);
      }
      setGame("endScreen")
    }


  return (
    <div className="Quiz">
      <h1>{Questions[curQues].prompt}</h1>
      <div className="options">
        <button onClick={()=>{setOptionChosen("A")}}>{Questions[curQues].optionA}{" "}</button>
        <button onClick={()=>{setOptionChosen("B")}}>{Questions[curQues].optionB}{" "}</button>
        <button onClick={()=>{setOptionChosen("C")}}>{Questions[curQues].optionC}{" "}</button>
        <button onClick={()=>{setOptionChosen("D")}}>{Questions[curQues].optionD}{" "}</button>

      </div>
      {curQues == Questions.length-1 ? (<button onClick={finishQuiz} className="custombtn">Finish Quiz</button>):
      (<button onClick={nextQuestion} className="custombtn">Next Question</button>)}
      
    </div>
  );
}
