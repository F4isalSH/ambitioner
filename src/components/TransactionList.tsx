import { SimpleGrid, GridItem, Text } from "@chakra-ui/react";
import { useCollection } from "../hooks/useCollection";
interface TransactionListProps {
  uid: string;
}

export const TransactionList: React.FC<TransactionListProps> = ({ uid }) => {
  const { documents: transactions }: any = useCollection("transactions");
  const userTransactions = transactions.where("uid", "==", uid);

  return (
    <SimpleGrid columns={3}>
      {userTransactions.map((transaction: any) => (
        <GridItem
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
