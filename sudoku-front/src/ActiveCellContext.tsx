import { createContext, useContext, useState, ReactNode } from 'react';

interface ActiveCellContextProps {
  activeCell: number | null;
  setActiveCell: (index: number | null) => void;
}

const ActiveCellContext = createContext<ActiveCellContextProps | undefined>(undefined);

export const ActiveCellProvider = ({ children }: { children: ReactNode }) => {
  const [activeCell, setActiveCell] = useState<number | null>(null);

  return (
    <ActiveCellContext.Provider value={{ activeCell, setActiveCell }}>
      {children}
    </ActiveCellContext.Provider>
  );
};

export const useActiveCell = () => {
  const context = useContext(ActiveCellContext);
  if (!context) {
    throw new Error('useActiveCell must be used within an ActiveCellProvider');
  }
  return context;
};
