import { Flex,Container,VStack, Text,Heading,SimpleGrid,GridItem } from "@chakra-ui/layout"
import { Button,FormControl,FormLabel,Input } from "@chakra-ui/react"
import { Sidebanner } from "../../components/Sidebanner"
export const Register: React.FC = () => {
    return (
        <Flex h='100vh' direction={{base: 'column', md: 'column', lg:'row'}}>
        <Sidebanner/>
        <Container w='full' height='full'>
            <VStack p={{base:19,md:25, lg:40}} alignItems='flex-start' spacing={3}>
                <Heading>Get Started</Heading>
                <Text color='gray.500'>Already have an account? <Button variant='link' color='#FFB0A5'>Log In</Button></Text>
                <SimpleGrid w='full' spacing={5}>

                <GridItem colSpan={1}>
                  <FormControl>
                  <FormLabel>Email Address</FormLabel>
                  <Input placeholder="email@gmail.com"/>
                  </FormControl>
                 </GridItem>

                 <GridItem colSpan={1}>
                  <FormControl>
                  <FormLabel>Password</FormLabel>
                  <Input placeholder='password'/>
                  </FormControl>
                 </GridItem>

                 <GridItem colSpan={1}>
                  <FormControl>
                  <FormLabel>Display Name</FormLabel>
                  <Input placeholder="John"/>
                  </FormControl>
                 </GridItem>

                 <GridItem  colSpan={1}>
                 <Button bg='#FFB0A5' color='white' size="lg" w="full">Register</Button>
                 </GridItem>
                    
                </SimpleGrid>

            </VStack>
        </Container>
        </Flex>
    )
}