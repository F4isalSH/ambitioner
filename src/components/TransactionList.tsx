import {
  SimpleGrid,
  GridItem,
  Text,
  Center,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { useCollection } from "../hooks/useCollection";
import { useFirestore } from "../hooks/useFirestore";
interface TransactionListProps {
  uid: string;
}

export const TransactionList: React.FC<TransactionListProps> = ({ uid }) => {
  const { documents }: any = useCollection("transactions", ["uid", "==", uid]);
  const { deleteDocument } = useFirestore("transactions");

  return (
    <Center w="full">
      <SimpleGrid columns={3} spacing={10}>
        {documents &&
          documents.map((transaction: any) => (
            <GridItem
              key={transaction.id}
              borderLeftColor="#EC615B"
              borderLeftWidth={5}
              borderRadius="lg"
              boxShadow="base"
              colSpan={1}
              p={2}
            >
              <HStack justifyContent="space-between">
                <Text>{transaction.transactionName}</Text>
                <HStack>
                  <Text>${transaction.amount}</Text>
                  <IconButton
                    aria-label="Delete Transaction"
                    variant="outline"
                    icon={<DeleteIcon />}
                    onClick={() => deleteDocument(transaction.id)}
                  />
                </HStack>
              </HStack>
            </GridItem>
          ))}
      </SimpleGrid>
    </Center>
  );
};
