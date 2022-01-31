import { Dashboard } from "../../components/Dashboard";
import { Flex } from "@chakra-ui/react";
export const Home: React.FC = () => {
  return (
    <Flex
      h="100vh"
      bg="#F3F8FB"
      direction={{ base: "column", md: "column", lg: "row" }}
    >
      <Dashboard />
    </Flex>
  );
};
