import { DarkModeProvider } from "./DarkModeState";
import { IContextsProps } from "./types";

export const Contexts = ({ children }: IContextsProps) => {
  return (
    <>
      <DarkModeProvider>{children}</DarkModeProvider>
    </>
  );
};
