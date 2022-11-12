import { FiMenu } from "react-icons/fi";
import { SwitchButton } from "../SwitchButton";
import { Container, BoxLogo, BoxIcons } from "./styles";
import { IWelcomeHeaderProps } from "./types";

export const WelcomeHeader = ({
  isOpen,
  handleOpenCloseMenu,
}: IWelcomeHeaderProps) => {
  return (
    <Container>
      <BoxLogo>
        <h1>Logo</h1>
      </BoxLogo>
      <BoxIcons>
        <SwitchButton size="30" />
        <FiMenu
          size="40"
          onClick={() => {
            handleOpenCloseMenu();
          }}
        />
      </BoxIcons>
    </Container>
  );
};
