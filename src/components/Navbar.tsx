import { CgDarkMode } from "react-icons/cg";
import { HStack, Image, Button, Icon } from "@chakra-ui/react";
import { useLogout } from "../hooks/useLogout";
export const Navbar: React.FC = () => {
  const { logout } = useLogout();
  return (
    <HStack w="full" py="10" px="20" justifyContent="space-between">
      <Image src="logo.svg" boxSize={{ base: 150 }} />
      <HStack spacing="7">
        <Button
          bg="#EB615A"
          color="white"
          borderRadius="full"
          boxShadow="base"
          _hover={{ bg: "#FFB0A5" }}
        >
          <Icon as={CgDarkMode} />
        </Button>
        <Button
          bg="#EB615A"
          color="white"
          borderRadius="full"
          boxShadow="base"
          _hover={{ bg: "#FFB0A5" }}
          onClick={logout}
        >
          Logout
        </Button>
      </HStack>
    </HStack>
  );
};
