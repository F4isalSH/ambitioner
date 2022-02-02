import {
  VStack,
  SimpleGrid,
  GridItem,
  FormControl,
  Input,
  Button,
  Center,
  Heading,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { useState } from "react";
import { useFirestore } from "../hooks/useFirestore";
import firebase from "firebase/app";

interface TransactionInputProps {
  user: firebase.User;
}

export const TransactionInput: React.FC<TransactionInputProps> = ({ user }) => {
  const [transactionName, setTransactionName] = useState<string>();
  const [amount, setAmount] = useState<number>();
  const { addDocument, response } = useFirestore("transactions");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    addDocument({
      transactionName,
      amount,
    });
  };

  return (
    <Center
      w={{ base: "full", md: "full", lg: "50%" }}
      h="100vh"
      bg="#FFB0A5"
      pb={10}
      boxShadow="base"
    >
      <VStack spacing={10}>
        <Heading color="white">Add a Transaction</Heading>
        <form onSubmit={handleSubmit}>
          <SimpleGrid w="full" spacing={10}>
            <GridItem colSpan={1}>
              <FormControl isRequired>
                <Input
                  boxShadow="lg"
                  placeholder="Transaction Name"
                  borderRadius="md"
                  bg="white"
                  onChange={(e) => setTransactionName(e.target.value)}
                  value={transactionName}
                />
              </FormControl>
            </GridItem>

            <GridItem colSpan={1}>
              <FormControl isRequired>
                <NumberInput
                  defaultValue={0.1}
                  step={0.1}
                  min={0.1}
                  bg="white"
                  borderRadius="md"
                  onChange={(valueString) =>
                    valueString.length
                      ? setAmount(parseFloat(valueString))
                      : setAmount(0)
                  }
                  value={amount}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
            </GridItem>

            <GridItem colSpan={1}>
              <Button
                type="submit"
                bg="#EB615A"
                borderRadius="md"
                boxShadow="lg"
                _hover={{ bg: "#F54D46" }}
                color="white"
                size="lg"
                w="full"
              >
                Save
              </Button>
            </GridItem>
          </SimpleGrid>
        </form>
      </VStack>
    </Center>
  );
};
