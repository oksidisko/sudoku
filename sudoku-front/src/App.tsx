import { useState } from 'react'
import './App.css'
import StartScreen from "./components/StartScreen/StartScreen.tsx";
import GameBoard from "./components/GameBoard/GameBoard.tsx";
import {boards} from "../data/boards.ts";


function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [initialBoard, setInitialBoard] = useState<Array<number|null>>([]);

  const startGame = () => {
    const boardsForDifficulty = boards['easy'];

    setInitialBoard(
        boardsForDifficulty[Math.floor(Math.random() * boardsForDifficulty.length)]
            .split('')
            .map(item => item === '0' ? null : parseInt(item))
    );
    
    setIsGameStarted(true);
  }

  return (
    <div className="App">
      {isGameStarted ? (
        <GameBoard onBack={() => setIsGameStarted(false)} initialBoard={ initialBoard } />
      ) : (
        <StartScreen onStart={startGame} />
      )}
    </div>
  );
}

export default App;
