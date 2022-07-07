import React,{useContext} from 'react';
import {QuizContext} from '../Helpers/Context';
import "../App.css";

function MainMenu() {
    const {game,setGame}=useContext(QuizContext);
  return (
    <div className="Menu">
      <button onClick={()=>{setGame("quiz");}}>Start Quiz</button>
    </div>
  );
}

export default MainMenu;
