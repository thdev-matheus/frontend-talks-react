import { useState } from "react";
import { WelcomeHeader } from "../../components/WelcomeHeader";
import { WelcomeMobileMenu } from "../../components/WelcomeMobileMenu";

export const WelcomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenCloseMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen && (
        <WelcomeMobileMenu handleOpenCloseMenu={handleOpenCloseMenu} />
      )}
      <WelcomeHeader
        isOpen={isOpen}
        handleOpenCloseMenu={handleOpenCloseMenu}
      />
    </>
  );
};
