import { FaSun, FaMoon } from "react-icons/fa";
import { ISwitchButtonProps } from "./types";
import { useDarkMode } from "../../contexts/DarkModeState";
import { Container } from "./styles";

export const SwitchButton = ({ size, ...rest }: ISwitchButtonProps) => {
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  const toggleDarkMode = (): void => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Container>
      {isDarkMode ? (
        <FaSun size={size} onClick={() => toggleDarkMode()} />
      ) : (
        <FaMoon size={size} onClick={() => toggleDarkMode()} />
      )}
    </Container>
  );
};
