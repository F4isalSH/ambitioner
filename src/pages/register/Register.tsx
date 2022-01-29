import { Flex,VStack, Text,Heading,SimpleGrid,GridItem,Center } from "@chakra-ui/layout"
import {useState} from 'react'
import { Button,FormControl,FormLabel,Input } from "@chakra-ui/react"
import { Sidebanner } from "../../components/Sidebanner"
import { useNavigate } from "react-router"
import { useSignup } from "../../hooks/useSignup"

export const Register: React.FC = () => {
    const navigate = useNavigate();
    const [email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')
    const [displayName,setDisplayName] = useState<string>('')
    const {error, isPending, signup} = useSignup()



    const handleSubmit = (e : React.FormEvent<HTMLFormElement>):void =>{
        e.preventDefault()
        signup({email, password, displayName})
    }


    return (
        <Flex h='100vh' direction={{base: 'column', md: 'column', lg:'row'}}>
        <Sidebanner/>
        <Center  w='full' height='full'>
            <VStack py={5} alignItems='flex-start' spacing={3}>
                <Heading>Get Started</Heading>
                <Text color='gray.500'>Already have an account? <Button onClick={()=>navigate('/login')} variant='link' color='#EB615A'>Log In</Button></Text>
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
                 <Button isLoading={isPending? true : false} type='submit' bg='#EB615A' _hover={{bg:'#FFB0A5'}} color='white' size="lg" w="full">Register</Button>
                 </GridItem>
                 </SimpleGrid>
                </form>
                {error && <p>{error}</p>}
            </VStack>
        </Center>
        </Flex>
    )
}