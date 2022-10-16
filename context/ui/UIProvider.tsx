import { FC, ReactNode, useReducer } from "react";
import { UIContext, uiReducer } from "./";

export interface UIState {
  sideMenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
}

const initialState: UIState = {
  sideMenuOpen: false,
  isAddingEntry: false,
  isDragging: false,
};

interface ProviderProps {
  children: ReactNode;
}

export const UIProvider: FC<ProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, initialState);

  const openSideMenu = () => dispatch({ type: "UI_OPEN_SIDEBAR" });
  const closeSideMenu = () => dispatch({ type: "UI_CLOSE_SIDEBAR" });

  const setIsAddingEntry = (isAdding: boolean) => {
    dispatch({ type: "UI_IS_ADD_ENTRY", payload: isAdding });
  };

  const setStartDragging = () => dispatch({ type: "UI_START_DRAGGING" });
  const setEndtDragging = () => dispatch({ type: "UI_END_DRAGGING" });

  return (
    <UIContext.Provider
      value={{
        ...state,
        //  Metodos
        openSideMenu,
        closeSideMenu,
        setIsAddingEntry,
        setStartDragging,
        setEndtDragging,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
