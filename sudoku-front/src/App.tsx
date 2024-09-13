import { useState } from 'react'
import './App.css'
import StartScreen from "./components/StartScreen/StartScreen.tsx";
import GameBoard from "./components/GameBoard/GameBoard.tsx";


function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  return (
    <div className="App">
      {isGameStarted ? (
        <GameBoard />
      ) : (
        <StartScreen onStart={() => setIsGameStarted(true)} />
      )}
    </div>
  );
}

export default App;
