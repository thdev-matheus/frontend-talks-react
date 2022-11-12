import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IDarkModeProviderProps {
  children: ReactNode;
}

export interface IDarkModeStateContextData {
  isDarkMode: boolean;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;
}
