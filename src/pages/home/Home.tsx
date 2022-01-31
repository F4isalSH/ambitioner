import { Dashboard } from "../../components/Dashboard";
import { Flex } from "@chakra-ui/react";
import { TransactionInput } from "../../components/TransactionInput";
export const Home: React.FC = () => {
  return (
    <Flex
      h="100vh"
      bg="#F3F8FB"
      direction={{ base: "column", md: "column", lg: "row" }}
    >
      <Dashboard />
      <TransactionInput />
    </Flex>
  );
};
