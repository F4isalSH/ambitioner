import firebase from "firebase/app";
import { SimpleGrid, GridItem } from "@chakra-ui/react";
import { useCollection } from "../hooks/useCollection";
interface TransactionListProps {
  uid: string;
}

export const TransactionList: React.FC<TransactionListProps> = ({ uid }) => {
  const { documents: transactions }: any = useCollection("transactions");

  return (
    <SimpleGrid columns={3}>
      {transactions.map((transaction: any) => (
        <GridItem></GridItem>
      ))}
    </SimpleGrid>
  );
};
