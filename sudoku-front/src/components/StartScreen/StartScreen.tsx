import './StartScreen.css'

interface StartScreenProps {
  onStart: () => void;
}

function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="start">
      <h1>Sudoku</h1>
      <button onClick={onStart}>New game</button>
    </div>
  );
}

export default StartScreen;
