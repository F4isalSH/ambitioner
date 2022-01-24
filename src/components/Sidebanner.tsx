import { VStack, Image,Flex} from "@chakra-ui/react"

export const Sidebanner: React.FC = () => {
    return (
        <Flex bg='#FFB0A5' alignItems='center' justifyContent='center' w='full' h='full' py={10}>
        <VStack 
        alignItems='flex-start'
        >
            <Image src='logo.svg'  />
            <Image boxSize={{base:300, md:600}} src='illustration.svg' />
            <Image src='landingMessage.svg' />
        
        </VStack>
        </Flex>
        
    )
}