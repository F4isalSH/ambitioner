import { Navbar } from "./Navbar";
import { VStack } from "@chakra-ui/react";
export const Dashboard: React.FC = ({}) => {
  return (
    <VStack w="full" h="100vh">
      <Navbar />
    </VStack>
  );
};
