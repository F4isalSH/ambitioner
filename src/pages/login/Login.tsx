import { Flex,VStack, Text,Heading,SimpleGrid,GridItem } from "@chakra-ui/layout"
import {useState} from 'react'
import { Button,FormControl,FormLabel,Input } from "@chakra-ui/react"
import { Sidebanner } from "../../components/Sidebanner"
export const Login: React.FC = () => {

    const [email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>):void =>{
        e.preventDefault()
    }


    return (
        <Flex h='100vh' direction={{base: 'column', md: 'column', lg:'row'}}>
        <Sidebanner/>
        <Flex alignItems='center' justifyContent='center' w='full' height='full'>
            <VStack py={5} alignItems='flex-start' spacing={3}>
                <Heading>Welcome</Heading>
                <Text color='gray.500'>Don't have an account? <Button variant='link' color='#FFB0A5'>Register</Button></Text>
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

                 <GridItem  colSpan={1}>
                 <Button type='submit' bg='#FFB0A5' color='white' size="lg" w="full">Login</Button>
                 </GridItem>
                 </SimpleGrid>
                </form>
                    
            </VStack>
        </Flex>
        </Flex>
    )
}