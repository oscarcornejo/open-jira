import { createContext } from "react";

interface ContextProps {
  sideMenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
  //   Metodos
  openSideMenu: () => void;
  closeSideMenu: () => void;
  setIsAddingEntry: (isAdding: boolean) => void;
  setStartDragging: () => void;
  setEndtDragging: () => void;
}

export const UIContext = createContext({} as ContextProps);
