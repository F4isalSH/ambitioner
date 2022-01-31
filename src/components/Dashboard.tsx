import { Navbar } from "./Navbar";
import { VStack, Heading, HStack, Icon } from "@chakra-ui/react";
import { useAuthContext } from "../hooks/useAuthContext";
import { FaMoneyBillWave } from "react-icons/fa";

export const Dashboard: React.FC = ({}) => {
  const { user }: any = useAuthContext();
  return (
    <VStack
      spacing={10}
      bg="#F3F8FB"
      alignItems="flex-start"
      w="full"
      h="100vh"
    >
      <Navbar />
      <Heading px="40" fontFamily="mono" size="lg">
        Welcome back, {user.displayName}.
      </Heading>

      <HStack px={40}>
        <Heading fontFamily="mono" size="md">
          Transactions
        </Heading>
        <Icon boxSize={6} as={FaMoneyBillWave} color="#EB615A" />
      </HStack>
    </VStack>
  );
};
