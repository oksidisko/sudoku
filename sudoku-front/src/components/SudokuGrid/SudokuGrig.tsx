import { useState, useEffect } from 'react';
import './SudokuGrid.css'


interface SudokuGridProps {
  selectedNumber: number | null;
  onClearSelectedNumber: () => void;
  initialBoard: Array<number|null>;
}

function SudokuGrid ({ selectedNumber, onClearSelectedNumber, initialBoard }: SudokuGridProps) {

  const findCellsToHighlight = (index: number):number[] => {
    const indexArray = [];
    const numInRow = index % 9;
    const squares = [
      [0, 1, 2, 9, 10, 11, 18, 19, 20], [3, 4, 5, 12, 13, 14, 21, 22, 23], [6, 7, 8, 15, 16, 17, 24, 25, 26],
      [27, 28, 29, 36, 37, 38, 45, 46, 47], [30, 31, 32, 39, 40, 41, 48, 49, 50], [33, 34, 35, 42, 43, 44, 51, 52, 53],
      [54, 55, 56, 63, 64, 65, 72, 73, 74], [57, 58, 59, 66, 67, 68, 75, 76, 77], [60, 61, 62, 69, 70, 71, 78, 79, 80]
    ];


    // highlight column
    for (let i = 1; i < 9; i++) {
      indexArray.push(index - i * 9);
      indexArray.push(index + i * 9);
    }

    // highlight row
    for (let i = 1; i <= numInRow; i++) {
      indexArray.push(index - i);
    }
    for (let i = 1; i < 9 - numInRow; i++) {
      indexArray.push(index + i);
    }

    // highlight square
    squares.forEach((square) => {
      if (square.includes(index)) {
        square.forEach((num) => indexArray.push(num));
      }
    })

    return indexArray.filter((el) => el >= 0 && el <= 81)
  };

  const [activeCell, setActiveCell] = useState<(number | null)>(null);
  const [highlightedCells, setHighlightedCells] = useState<(number | null) []>([]);
  const [sudokuBoard, setSudokuBoard] = useState<(number | null)[]>(initialBoard);

  const handleClick = (index: number): void => {
    console.log(index)
    setActiveCell(index);
    setHighlightedCells(findCellsToHighlight(index));
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
            className={`sudoku-cell ${activeCell === index ? 'is-active' : ''} ${highlightedCells.includes(index) ? 'is-highlighted' : ''}`}
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
