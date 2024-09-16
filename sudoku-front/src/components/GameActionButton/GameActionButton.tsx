interface GameButtonProps {
  icon: Element;
  text: string;
  tooltip?: string;
  onClick: () => void;
}

function GameActionButton({ icon, text, onClick, tooltip }: GameButtonProps) {
  return (
    <button className="game-board__button game-board-button" onClick={onClick}>
      <span className="game-board-button__icon">{icon}</span>
      <span className="game-board-button__text">{text}</span>
      {tooltip && (
        <span className="game-board-button__tooltip">{tooltip}</span>
      )}
    </button>
  );
}

export default GameActionButton;
