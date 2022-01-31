import { Box } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { BiMenu } from "react-icons/bi";
interface MenuToggleProps {
  toggleMenu: () => void;
  isOpen: boolean;
}

export const MenuToggle: React.FC<MenuToggleProps> = ({
  toggleMenu,
  isOpen,
}) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
      {isOpen ? <CloseIcon /> : <BiMenu />}
    </Box>
  );
};
