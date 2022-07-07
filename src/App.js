import "./App.css";
import React, { useState } from "react";
import MainMenu from "./Components/MainMenu";
import Quiz from "./Components/Quiz";
import EndScreen from "./Components/EndScreen";
import { QuizContext } from "./Helpers/Context";

function App() {
  const [game, setGame] = useState("menu");
  const [score,setScore]=useState(0)

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <QuizContext.Provider value={{ game, setGame, score, setScore }}>
        {game === "menu" && <MainMenu />}
        {game === "quiz" && <Quiz />}
        {game === "endScreen" && <EndScreen />}
      </QuizContext.Provider>

      <p>Ovi &copy; 2022</p>
    </div>
  );
}

export default App;
