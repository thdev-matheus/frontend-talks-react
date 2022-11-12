import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { useDarkMode } from "./contexts/DarkModeState";
import { DarkTheme, ligthTheme } from "./themes";
import { ThemeProvider } from "styled-components";

export const App = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <ThemeProvider theme={isDarkMode ? DarkTheme : ligthTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
