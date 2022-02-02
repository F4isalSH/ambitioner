import { HStack, Image, Button } from "@chakra-ui/react";
import { useLogout } from "../hooks/useLogout";
export const Navbar: React.FC = () => {
  const { logout } = useLogout();
  return (
    <HStack w="full" justifyContent="space-between" px={10}>
      <Image src="logo.svg" boxSize={{ base: 150 }} />
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
  );
};
