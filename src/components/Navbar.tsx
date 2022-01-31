import { useState } from "react";
import { CgDarkMode } from "react-icons/cg";
import { HStack, Image, Button, Icon } from "@chakra-ui/react";
export const Navbar: React.FC = () => {
  return (
    <HStack w="full" py="10" px="20" justifyContent="space-between">
      <Image src="logo.svg" boxSize={{ base: 150 }} />
      <HStack spacing="7">
        <Button bg="#EB615A" color="white" borderRadius="full" boxShadow="base">
          <Icon as={CgDarkMode} />
        </Button>
        <Button bg="#EB615A" color="white" borderRadius="full" boxShadow="base">
          Logout
        </Button>
      </HStack>
    </HStack>
  );
};
