import {
  Flex,
  VStack,
  Text,
  Heading,
  SimpleGrid,
  GridItem,
  Center,
} from "@chakra-ui/layout";
import { useState, useEffect } from "react";
import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Sidebanner } from "../../components/Sidebanner";
import { useNavigate } from "react-router";
import { useLogin } from "../../hooks/useLogin";
import { toast } from "react-hot-toast";

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { error, isPending, login } = useLogin();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    login(email, password);
  };

  useEffect(() => {
    if (error) {
      toast.error("You have entered an invalid username or password");
    }
  }, error);

  return (
    <Flex h="100vh" direction={{ base: "column", md: "column", lg: "row" }}>
      <Sidebanner />
      <Center w="full" height="full">
        <VStack py={5} alignItems="flex-start" spacing={3}>
          <Heading>Welcome</Heading>
          <Text color="gray.500">
            Don't have an account?{" "}
            <Button
              onClick={() => navigate("/register")}
              variant="link"
              color="#EB615A"
            >
              Register
            </Button>
          </Text>
          <form onSubmit={handleSubmit}>
            <SimpleGrid w="full" spacing={5}>
              <GridItem colSpan={1}>
                <FormControl isRequired>
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <Input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </FormControl>
              </GridItem>

              <GridItem colSpan={1}>
                <FormControl isRequired>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </FormControl>
              </GridItem>

              <GridItem colSpan={1}>
                <Button
                  type="submit"
                  isLoading={isPending}
                  bg="#EB615A"
                  _hover={{ bg: "#FFB0A5" }}
                  color="white"
                  size="lg"
                  w="full"
                >
                  Login
                </Button>
              </GridItem>
            </SimpleGrid>
          </form>
        </VStack>
      </Center>
    </Flex>
  );
};
