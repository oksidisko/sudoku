import { createContext, useContext, useState, ReactNode } from 'react';

interface SudokuBoardContextProps {
  activeCell: number | null;
  setActiveCell: (index: number | null) => void;
  sudokuBoard: (number | null)[];
  setSudokuBoard: (board: (number | null)[]) => void;
  solvedBoard: (number | null)[];
  setSolvedBoard: (board: (number | null)[]) => void;
}

const SudokuBoardContext = createContext<SudokuBoardContextProps | undefined>(undefined);

export const SudokuBoardProvider = ({
                                      children,
                                      initialBoard,
                                      initialSolvedBoard,
                                    }: {
  children: ReactNode;
  initialBoard: (number | null)[];
  initialSolvedBoard: (number | null)[];
}) => {

  const [sudokuBoard, setSudokuBoard] = useState<(number | null)[]>(initialBoard);
  const [solvedBoard, setSolvedBoard] = useState<(number | null)[]>(initialSolvedBoard);
  const [activeCell, setActiveCell] = useState<number | null>(sudokuBoard.indexOf(null));


  return (
    <SudokuBoardContext.Provider
      value={{
        activeCell,
        setActiveCell,
        sudokuBoard,
        setSudokuBoard,
        solvedBoard,
        setSolvedBoard,
      }}
    >
      {children}
    </SudokuBoardContext.Provider>
  );
};

export const useSudokuBoard = () => {
  const context = useContext(SudokuBoardContext);
  if (!context) {
    throw new Error('useSudokuBoard must be used within a SudokuBoardProvider');
  }
  return context;
};
