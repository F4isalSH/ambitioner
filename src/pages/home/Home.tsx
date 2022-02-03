import { Dashboard } from "../../components/Dashboard";
import { Flex } from "@chakra-ui/react";
import { TransactionInput } from "../../components/TransactionInput";
import { useAuthContext } from "../../hooks/useAuthContext";
export const Home: React.FC = () => {
  const { user }: any = useAuthContext();
  return (
    <Flex
      h={{ md: "100vh", lg: "100vh" }}
      direction={{ base: "column", md: "column", lg: "row" }}
    >
      <Dashboard />
      <TransactionInput uid={user.uid} />
    </Flex>
  );
};
