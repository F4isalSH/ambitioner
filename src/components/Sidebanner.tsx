import { VStack, Image } from "@chakra-ui/react"

export const Sidebanner: React.FC = () => {
    return (
        <VStack 
        w='full'
        h='full'
        bg='#FFB0A5'
        p={10}
        spacing={10}
        alignItems='flex-start'
        >
            <Image src='logo.svg'  />
            <Image boxSize={500} src='illustration.svg' />
        
        </VStack>
    )
}