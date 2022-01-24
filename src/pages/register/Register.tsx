import { Flex,Container,VStack, Text,Heading,SimpleGrid,GridItem } from "@chakra-ui/layout"
import {useState} from 'react'
import { Button,FormControl,FormLabel,Input } from "@chakra-ui/react"
import { Sidebanner } from "../../components/Sidebanner"
export const Register: React.FC = () => {

    const [email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')
    const [displayName,setDisplayName] = useState<string>('')

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>):void =>{
        e.preventDefault()
    }


    return (
        <Flex h='100vh' direction={{base: 'column', md: 'column', lg:'row'}}>
        <Sidebanner/>
        <Container w='full' height='full'>
            <VStack p={{base:19,md:25, lg:40}} alignItems='flex-start' spacing={3}>
                <Heading>Get Started</Heading>
                <Text color='gray.500'>Already have an account? <Button variant='link' color='#FFB0A5'>Log In</Button></Text>
                <form onSubmit={handleSubmit}>
                <SimpleGrid w='full' spacing={5}>
                <GridItem colSpan={1}>
                  <FormControl isRequired>
                  <FormLabel htmlFor='email'>Email Address</FormLabel>
                  <Input 
                  type='email'
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  />
                  </FormControl>
                 </GridItem>

                 <GridItem colSpan={1}>
                  <FormControl isRequired>
                  <FormLabel htmlFor='password'>Password</FormLabel>
                  <Input 
                  type='password'
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  />
                  </FormControl>
                 </GridItem>

                 <GridItem colSpan={1}>
                  <FormControl isRequired>
                  <FormLabel>Display Name</FormLabel>
                  <Input 
                  placeholder="Faisal"
                  onChange={(e) => setDisplayName(e.target.value)}
                  value={displayName}
                  />
                  </FormControl>
                 </GridItem>

                 <GridItem  colSpan={1}>
                 <Button type='submit' bg='#FFB0A5' color='white' size="lg" w="full">Register</Button>
                 </GridItem>
                 </SimpleGrid>
                </form>
                    
            </VStack>
        </Container>
        </Flex>
    )
}