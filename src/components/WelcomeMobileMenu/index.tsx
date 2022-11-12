import { BoxMenu, BoxOut, Container } from "./styles";
import { IWelcomeMobileMenuProps } from "./types";
import { useNavigate } from "react-router-dom";

export const WelcomeMobileMenu = ({
  handleOpenCloseMenu,
}: IWelcomeMobileMenuProps) => {
  const navigate = useNavigate();

  const handleNavigate = (path: string): void => navigate(path);

  return (
    <Container>
      <BoxOut onClick={() => handleOpenCloseMenu()} />
      <BoxMenu>
        <span onClick={() => handleNavigate("/feedback")}>Feedback</span>
        <span onClick={() => handleNavigate("/sobre")}>Sobre</span>
      </BoxMenu>
    </Container>
  );
};
