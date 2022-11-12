import { FiMenu } from "react-icons/fi";
import { SwitchButton } from "../SwitchButton";
import { Container, BoxLogo, BoxIconsMobile, BoxLinksTabDesk } from "./styles";
import { IWelcomeHeaderProps } from "./types";
import { useNavigate } from "react-router-dom";

export const WelcomeHeader = ({
  isOpen,
  handleOpenCloseMenu,
}: IWelcomeHeaderProps) => {
  const navigate = useNavigate();

  const handleNavigate = (path: string): void => {
    navigate(path);
  };

  return (
    <Container>
      <BoxLogo>
        <h1>Logo</h1>
      </BoxLogo>
      <BoxIconsMobile>
        <SwitchButton size="30" />
        <FiMenu
          size="40"
          onClick={() => {
            handleOpenCloseMenu();
          }}
        />
      </BoxIconsMobile>
      <BoxLinksTabDesk>
        <span onClick={() => handleNavigate("/feedback")}>Feedback</span>
        <span onClick={() => handleNavigate("/sobre")}>Sobre</span>
        <SwitchButton size="40" />
      </BoxLinksTabDesk>
    </Container>
  );
};
