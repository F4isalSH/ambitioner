import { SimpleGrid, GridItem, Text } from "@chakra-ui/react";
import { useCollection } from "../hooks/useCollection";
import { toast } from "react-hot-toast";
interface TransactionListProps {
  uid: string;
}

export const TransactionList: React.FC<TransactionListProps> = ({ uid }) => {
  const { documents }: any = useCollection("transactions", ["uid", "==", uid]);

  return (
    <SimpleGrid columns={3}>
      {documents &&
        documents.map((transaction: any) => (
          <GridItem
            key={transaction.uid}
            borderLeftColor="#EC615B"
            borderRadius="lg"
            boxShadow="base"
            colSpan={1}
            justifyContent="space-between"
          >
            <Text>{transaction.transactionName}</Text>
            <Text>{transaction.amount}</Text>
          </GridItem>
        ))}
    </SimpleGrid>
  );
};
