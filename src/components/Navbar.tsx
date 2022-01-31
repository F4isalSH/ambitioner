import { useState } from "react";
import { Container, Image } from "@chakra-ui/react";
import { MenuToggle } from "./MenuToggle";
export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return <MenuToggle toggleMenu={toggleMenu} isOpen={isOpen} />;
};
