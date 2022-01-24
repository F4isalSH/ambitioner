import { VStack, Image} from "@chakra-ui/react"

export const Sidebanner: React.FC = () => {
    return (
        <VStack 
        w='full'
        h='full'
        bg='#FFB0A5'
        p={20}
        alignItems='flex-start'
        >
            <Image src='logo.svg'  />
            <Image boxSize={{base:300, md:600}} src='illustration.svg' />
            <Image src='landingMessage.svg' />
        
        </VStack>
    )
}