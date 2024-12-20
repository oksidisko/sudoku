import {useState} from "react";
import './GameBoard.css'
import SudokuGrid from '../SudokuGrid/SudokuGrig.tsx'
import GameActionButton from '../GameActionButton/GameActionButton.tsx';

interface GameBoardProps {
  onBack: () => void;
  initialBoard: Array<number|null>
}

function GameBoard({onBack, initialBoard}: GameBoardProps) {

  const [selectedNumber, setSelectedNumber] = useState<number | null | undefined>(null);

  const handleNumberClick = (number: number) => {
    setSelectedNumber(number);
  };
  const handleClearSelectedNumber = () => {
    setSelectedNumber(undefined);
  };

  const handleUndo = () => {
      console.log('Undo clicked');
    };
  const handleErase = () => {
      setSelectedNumber(null);
    };
  const handleNote = () => {
      console.log('Note clicked');
    };
  const handleHint = () => {
      console.log('Hint clicked');
    };

  const BackIcon = () => (
    <svg viewBox="0 0 1024 1024" fill="#000000" className="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z" fill="" /></svg>
  );
  const UndoIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.5 12L9.5 7M4.5 12L9.5 17M4.5 12L11 12M14.5 12C16.1667 12 19.5 13 19.5 17" stroke="#1C274C"
            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  const EraseIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.50506 11.4096L6.03539 11.9399L5.50506 11.4096ZM3 14.9522H2.25H3ZM12.5904 18.4949L12.0601 17.9646L12.5904 18.4949ZM9.04776 21V21.75V21ZM11.4096 5.50506L10.8792 4.97473L11.4096 5.50506ZM13.241 17.8444C13.5339 18.1373 14.0088 18.1373 14.3017 17.8444C14.5946 17.5515 14.5946 17.0766 14.3017 16.7837L13.241 17.8444ZM7.21629 9.69832C6.9234 9.40543 6.44852 9.40543 6.15563 9.69832C5.86274 9.99122 5.86274 10.4661 6.15563 10.759L7.21629 9.69832ZM16.073 16.073C16.3659 15.7801 16.3659 15.3053 16.073 15.0124C15.7801 14.7195 15.3053 14.7195 15.0124 15.0124L16.073 16.073ZM18.4676 11.5559C18.1759 11.8499 18.1777 12.3248 18.4718 12.6165C18.7658 12.9083 19.2407 12.9064 19.5324 12.6124L18.4676 11.5559ZM6.03539 11.9399L11.9399 6.03539L10.8792 4.97473L4.97473 10.8792L6.03539 11.9399ZM6.03539 17.9646C5.18538 17.1146 4.60235 16.5293 4.22253 16.0315C3.85592 15.551 3.75 15.2411 3.75 14.9522H2.25C2.25 15.701 2.56159 16.3274 3.03 16.9414C3.48521 17.538 4.1547 18.2052 4.97473 19.0253L6.03539 17.9646ZM4.97473 10.8792C4.1547 11.6993 3.48521 12.3665 3.03 12.9631C2.56159 13.577 2.25 14.2035 2.25 14.9522H3.75C3.75 14.6633 3.85592 14.3535 4.22253 13.873C4.60235 13.3752 5.18538 12.7899 6.03539 11.9399L4.97473 10.8792ZM12.0601 17.9646C11.2101 18.8146 10.6248 19.3977 10.127 19.7775C9.64651 20.1441 9.33665 20.25 9.04776 20.25V21.75C9.79649 21.75 10.423 21.4384 11.0369 20.97C11.6335 20.5148 12.3008 19.8453 13.1208 19.0253L12.0601 17.9646ZM4.97473 19.0253C5.79476 19.8453 6.46201 20.5148 7.05863 20.97C7.67256 21.4384 8.29902 21.75 9.04776 21.75V20.25C8.75886 20.25 8.449 20.1441 7.9685 19.7775C7.47069 19.3977 6.88541 18.8146 6.03539 17.9646L4.97473 19.0253ZM17.9646 6.03539C18.8146 6.88541 19.3977 7.47069 19.7775 7.9685C20.1441 8.449 20.25 8.75886 20.25 9.04776H21.75C21.75 8.29902 21.4384 7.67256 20.97 7.05863C20.5148 6.46201 19.8453 5.79476 19.0253 4.97473L17.9646 6.03539ZM19.0253 4.97473C18.2052 4.1547 17.538 3.48521 16.9414 3.03C16.3274 2.56159 15.701 2.25 14.9522 2.25V3.75C15.2411 3.75 15.551 3.85592 16.0315 4.22253C16.5293 4.60235 17.1146 5.18538 17.9646 6.03539L19.0253 4.97473ZM11.9399 6.03539C12.7899 5.18538 13.3752 4.60235 13.873 4.22253C14.3535 3.85592 14.6633 3.75 14.9522 3.75V2.25C14.2035 2.25 13.577 2.56159 12.9631 3.03C12.3665 3.48521 11.6993 4.1547 10.8792 4.97473L11.9399 6.03539ZM14.3017 16.7837L7.21629 9.69832L6.15563 10.759L13.241 17.8444L14.3017 16.7837ZM15.0124 15.0124L12.0601 17.9646L13.1208 19.0253L16.073 16.073L15.0124 15.0124ZM19.5324 12.6124C20.1932 11.9464 20.7384 11.3759 21.114 10.8404C21.5023 10.2869 21.75 9.71511 21.75 9.04776H20.25C20.25 9.30755 20.1644 9.58207 19.886 9.979C19.5949 10.394 19.1401 10.8781 18.4676 11.5559L19.5324 12.6124Z"
        fill="#1C274C"/>
      <path d="M9 21H21" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
  const NoteIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.3601 4.07866L15.2869 3.15178C16.8226 1.61607 19.3125 1.61607 20.8482 3.15178C22.3839 4.68748 22.3839 7.17735 20.8482 8.71306L19.9213 9.63993M14.3601 4.07866C14.3601 4.07866 14.4759 6.04828 16.2138 7.78618C17.9517 9.52407 19.9213 9.63993 19.9213 9.63993M14.3601 4.07866L12 6.43872M19.9213 9.63993L14.6607 14.9006L11.5613 18L11.4001 18.1612C10.8229 18.7383 10.5344 19.0269 10.2162 19.2751C9.84082 19.5679 9.43469 19.8189 9.00498 20.0237C8.6407 20.1973 8.25352 20.3263 7.47918 20.5844L4.19792 21.6782M4.19792 21.6782L3.39584 21.9456C3.01478 22.0726 2.59466 21.9734 2.31063 21.6894C2.0266 21.4053 1.92743 20.9852 2.05445 20.6042L2.32181 19.8021M4.19792 21.6782L2.32181 19.8021M2.32181 19.8021L3.41556 16.5208C3.67368 15.7465 3.80273 15.3593 3.97634 14.995C4.18114 14.5653 4.43213 14.1592 4.7249 13.7838C4.97308 13.4656 5.26166 13.1771 5.83882 12.5999L8.5 9.93872"
        stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
  const HintIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 19.5H14M10.6667 22H13.3333" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"/>
      <path
        d="M15 2.60222C14.0907 2.21646 13.0736 2 12 2C8.13401 2 5 4.8069 5 8.21807L5.00007 8.30193C5.00875 10.2984 5.86939 12.2187 7.41058 13.6805L8.51463 14.7196C8.82437 15.0112 9 15.4177 9 15.843C9 16.482 9.518 17 10.157 17H13.843C14.482 17 15 16.482 15 15.843C15 15.4177 15.1756 15.0112 15.4854 14.7196L16.5894 13.6805C18.1306 12.2187 18.9912 10.2984 18.9999 8.30193L19 8.21807C19 7.43838 18.8363 6.69025 18.5375 6"
        stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );


  return (
    <>
      <div className="game-board">
        <header className="game-board__header">
          <button className="back-button" onClick={onBack}>
          <span className="back-button__icon">
            <BackIcon/>
          </span>
          </button>
        </header>

        <SudokuGrid
          selectedNumber={selectedNumber}
          onClearSelectedNumber={handleClearSelectedNumber}
          initialBoard={initialBoard}
        />

        <div className="game-board__actions">
          <GameActionButton
            icon={<UndoIcon/>}
            text="Отмена"
            onClick={handleUndo}
          />
          <GameActionButton
            icon={<EraseIcon/>}
            text="Стереть"
            onClick={handleErase}
          />
          <GameActionButton
            icon={<NoteIcon/>}
            text="Черновик"
            onClick={handleNote}
            tooltip="Выкл"
          />
          <GameActionButton
            icon={<HintIcon/>}
            text="Подсказка"
            onClick={handleHint}
          />
        </div>

        <div className="game-board__numbers">
          {
            Array.from({length: 9}, (_, index) => (
              <span
                key={index}
                className="game-board__number"
                onClick={() => handleNumberClick(index + 1)}
              >
                {index + 1}
              </span>
            ))
          }
        </div>

      </div>
    </>
  )
}

export default GameBoard
