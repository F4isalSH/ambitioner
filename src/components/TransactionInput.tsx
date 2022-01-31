import { VStack } from "@chakra-ui/layout";

export const TransactionInput: React.FC = () => {
  return (
    <VStack
      borderRadius="xl"
      boxShadow="lg"
      bg="white"
      w={{ base: "full", md: "full", lg: "50%" }}
      h="100vh"
    ></VStack>
  );
};
