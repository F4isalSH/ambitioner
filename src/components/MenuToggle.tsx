import { Box } from "@chakra-ui/react";
interface MenuToggleProps {
  toggleMenu: () => void;
  isOpen: boolean;
}

export const MenuToggle: React.FC<MenuToggleProps> = ({
  toggleMenu,
  isOpen,
}) => {
  return (
    <div>
      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </Box>
    </div>
  );
};
