import { Navbar } from "./Navbar";
import { VStack, Heading } from "@chakra-ui/react";
import { useAuthContext } from "../hooks/useAuthContext";

export const Dashboard: React.FC = ({}) => {
  const { user }: any = useAuthContext();
  return (
    <VStack bg="#F3F8FB" alignItems="flex-start" w="full" h="100vh">
      <Navbar />
      <Heading px="40" fontFamily="Poppins">
        Welcome back, {user.displayName}.
      </Heading>
    </VStack>
  );
};
