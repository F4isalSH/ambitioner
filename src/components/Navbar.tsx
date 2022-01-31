import { useState } from "react";
import { CgDarkMode } from "react-icons/cg";
import { HStack, Image, Button, Icon } from "@chakra-ui/react";
export const Navbar: React.FC = () => {
  return (
    <nav>
      <HStack w="full" py="10" px="20" justifyContent="space-between">
        <Image src="logo.svg" boxSize={{ base: 150 }} />
        <HStack>
          <Button bg="#EB615A" color="white" borderRadius="full">
            <Icon as={CgDarkMode} />
          </Button>
          <Button bg="#EB615A" color="white" borderRadius="full">
            Logout
          </Button>
        </HStack>
      </HStack>
    </nav>
  );
};
