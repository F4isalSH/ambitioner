import { SimpleGrid, GridItem, Text, Center, HStack } from "@chakra-ui/react";
import { useCollection } from "../hooks/useCollection";
import { toast } from "react-hot-toast";
interface TransactionListProps {
  uid: string;
}

export const TransactionList: React.FC<TransactionListProps> = ({ uid }) => {
  const { documents }: any = useCollection("transactions", ["uid", "==", uid]);

  return (
    <Center w="full">
      <SimpleGrid columns={3} spacing={10}>
        {documents &&
          documents.map((transaction: any) => (
            <GridItem
              key={transaction.uid}
              borderLeftColor="#EC615B"
              borderLeftWidth={5}
              borderRadius="lg"
              boxShadow="base"
              colSpan={1}
              p={2}
            >
              <HStack justifyContent="space-between">
                <Text>{transaction.transactionName}</Text>
                <Text>${transaction.amount}</Text>
              </HStack>
            </GridItem>
          ))}
      </SimpleGrid>
    </Center>
  );
};
