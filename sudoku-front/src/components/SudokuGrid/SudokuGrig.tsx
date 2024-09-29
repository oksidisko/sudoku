import { useState, useEffect } from 'react';
import './SudokuGrid.css'


interface SudokuGridProps {
  selectedNumber: number | null;
  onClearSelectedNumber: () => void;
  initialBoard: Array<number|null>;
}

function SudokuGrid ({ selectedNumber, onClearSelectedNumber, initialBoard }: SudokuGridProps) {

  const [activeCell, setActiveCell] = useState<(number | null)>(null);
  const [sudokuBoard, setSudokuBoard] = useState<(number | null)[]>(initialBoard);

  const handleClick = (index: number): void => {
    setActiveCell(index);
  };


  useEffect(() => {
    if (activeCell !== null && selectedNumber !== null) {
      // Check if the cell is not an initial cell
      if (initialBoard[activeCell] === null) {
        const updatedBoard = [...sudokuBoard];
        updatedBoard[activeCell] = selectedNumber;
        setSudokuBoard(updatedBoard);
        onClearSelectedNumber();
      }
    }
  }, [selectedNumber]);


  return (
    <>
    <div className="sudoku-grid">
      {
        sudokuBoard.map((num, index) => (
          <span
            key={index}
            className={`sudoku-cell ${activeCell === index ? 'is-active' : ''}`}
            onClick={() => handleClick(index)}
          >
            {num !== null ? num : ''}
          </span>
        ))
      }
    </div>

    </>
  )
}

export default SudokuGrid;
