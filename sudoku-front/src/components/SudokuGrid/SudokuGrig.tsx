import { useState, useEffect } from 'react';
import './SudokuGrid.css'


interface SudokuGridProps {
  selectedNumber: number | null;
  onClearSelectedNumber: () => void;
}

function SudokuGrid ({ selectedNumber, onClearSelectedNumber }: SudokuGridProps) {

  const initialBoard = [
    5, 3, null, null, 7, null, null, null, null,
    6, null, null, 1, 9, 5, null, null, null,
    null, 9, 8, null, null, null, null, 6, null,
    8, null, null, null, 6, null, null, null, 3,
    4, null, null, 8, null, 3, null, null, 1,
    null, null, null, null, 2, null, null, null, 6,
    null, 6, null, null, null, null, 2, 8, null,
    null, null, null, 4, 1, 9, null, null, 5,
    null, null, null, null, 8, null, null, 7, 9
  ]

  const [activeCell, setActiveCell] = useState(null);
  const [sudokuBoard, setSudokuBoard] = useState<(number | null)[]>(initialBoard);

  const handleClick = (index) => {
    setActiveCell(index);
  };


  useEffect(() => {
    if (activeCell !== null && selectedNumber !== null) {
      const updatedBoard = [...sudokuBoard];
      updatedBoard[activeCell] = selectedNumber;
      setSudokuBoard(updatedBoard);
      onClearSelectedNumber();
    }
  }, [selectedNumber, activeCell, sudokuBoard, onClearSelectedNumber]);


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
