import { createContext, useState, useContext } from "react";
import { IDarkModeProviderProps, IDarkModeStateContextData } from "./types";

export const DarkModeStateContext = createContext<IDarkModeStateContextData>(
  {} as IDarkModeStateContextData
);

export const useDarkMode = () => {
  const context = useContext(DarkModeStateContext);

  return context;
};

export const DarkModeProvider = ({ children }: IDarkModeProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <DarkModeStateContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkModeStateContext.Provider>
  );
};
