import { useState } from "react";
import { Button } from "../../components/Button";
import { WelcomeHeader } from "../../components/WelcomeHeader";
import { WelcomeMobileMenu } from "../../components/WelcomeMobileMenu";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";

export const WelcomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path: string): void => navigate(path);

  const handleOpenCloseMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      {isOpen && (
        <WelcomeMobileMenu handleOpenCloseMenu={handleOpenCloseMenu} />
      )}
      <WelcomeHeader
        isOpen={isOpen}
        handleOpenCloseMenu={handleOpenCloseMenu}
      />
      <h2>Bem-vindo(a) ao Talk's!</h2>
      <img src="https://i.ibb.co/H7SpdbK/welcomepage.png" alt="welcomeimage" />
      <h3>A plataforma que te conecta</h3>
      <h3>Comece já!</h3>
      <div>
        <Button text="LOGIN" onClick={() => handleNavigate("/login")} />
        <Button text="CADASTRO" onClick={() => handleNavigate("/register")} />
      </div>
    </Container>
  );
};
