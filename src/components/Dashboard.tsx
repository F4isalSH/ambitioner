import { Navbar } from "./Navbar";
import { VStack, Heading } from "@chakra-ui/react";
import { useAuthContext } from "../hooks/useAuthContext";
import firebase from "firebase/app";
export const Dashboard: React.FC = ({}) => {
  const { user }: any = useAuthContext();
  return (
    <VStack alignItems="flex-start" w="full" h="100vh">
      <Navbar />
      <Heading px="20" fontFamily="mono" size="md">
        Welcome back, {user.displayName}.
      </Heading>
    </VStack>
  );
};
