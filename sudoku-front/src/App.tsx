import { useState } from 'react';
import './App.css';
import StartScreen from './components/StartScreen/StartScreen.tsx';
import GameBoard from './components/GameBoard/GameBoard.tsx';
import { boards } from '../data/boards.ts';
import { SudokuBoardProvider } from './SudokuBoardContext.tsx';
import { solve } from 'sudoku-core';

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [initialBoard, setInitialBoard] = useState<Array<number | null>>([]);
  const [solvedBoard, setSolvedBoard] = useState<Array<number | null>>([]);

  const startGame = () => {
    const boardsForDifficulty = boards['test'];

    const board = boardsForDifficulty[Math.floor(Math.random() * boardsForDifficulty.length)]
      .split('')
      .map((item) => (item === '0' ? null : parseInt(item)));

    setInitialBoard(board);

    const solved = solve(board.map(num => num === null ? 0 : num)).board;
    setSolvedBoard(solved);

    setIsGameStarted(true);
  };

  return (
    <div className="App">
      {isGameStarted ? (
        <SudokuBoardProvider initialBoard={initialBoard} initialSolvedBoard={solvedBoard}>
          <GameBoard onBack={() => setIsGameStarted(false)} initialBoard={initialBoard} />
        </SudokuBoardProvider>
      ) : (
        <StartScreen onStart={startGame} />
      )}
    </div>
  );
}

export default App;
