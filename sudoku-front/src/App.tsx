import { useState } from 'react'
import './App.css'
import StartScreen from "./components/StartScreen/StartScreen.tsx";
import GameBoard from "./components/GameBoard/GameBoard.tsx";
import {boards} from "../data/boards.ts";
import { ActiveCellProvider } from './ActiveCellContext';
import {solve} from "sudoku-core";


function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [initialBoard, setInitialBoard] = useState<Array<number|null>>([]);
  const [solvedBoard, setSolvedBoard] = useState<Array<number|null>>(null);

  const startGame = () => {
    const boardsForDifficulty = boards['test'];

    setInitialBoard(
      boardsForDifficulty[Math.floor(Math.random() * boardsForDifficulty.length)]
        .split('')
        .map(item => item === '0' ? null : parseInt(item))
    );

    setSolvedBoard(solve(initialBoard).board);

    console.log(solve(initialBoard).board)

    setIsGameStarted(true);
  }

  return (
    <div className="App">
      {isGameStarted ? (
          <ActiveCellProvider>
            <GameBoard onBack={() => setIsGameStarted(false)} initialBoard={ initialBoard } solvedBoard={solvedBoard} />
          </ActiveCellProvider>
      ) : (
        <StartScreen onStart={startGame} />
      )}
    </div>
  );
}

export default App;
