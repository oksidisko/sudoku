import './StartScreen.css'

interface StartScreenProps {
  onStart: () => void;
}

function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="start">
      <h1>Sudoku</h1>
      <button onClick={onStart}>Начать игру</button>
    </div>
  );
}

export default StartScreen;
