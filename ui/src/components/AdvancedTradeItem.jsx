import { Box, HStack, VStack, Text, Heading, Image } from '@chakra-ui/react'

const AdvancedTradeItem = () => {

  return (
    <Box 
      px='1rem' py='0.5rem' maxH='4rem' minW='500px' 
      bg='gray.200' borderRadius='0.5rem'
      align='center' justify='center'
    >
      <HStack align='center' justify='space-between'>
        <Image
          src='https://cdn.hoopshype.com/i/46/20/4d/zaccharie-risacher.png'
          boxSize='3rem'
          bg='ATL'
          borderRadius='0.5rem'
          border='1px'
          borderColor='gray.800'
        />
        <VStack gap='0.25rem'>
          <Heading as='h2' fontSize='1rem'>Zaccharie Risacher | F</Heading>
          <Text fontWeight='light' fontSize='0.75rem'>5 Years</Text>
        </VStack>
        <Text fontWeight='light' fontSize='1rem'>$12,569,040</Text>
        <Image
          src='https://seeklogo.com/images/A/atlanta-hawks-logo-A108D0AC8D-seeklogo.com.png'
          boxSize='2rem'
        />
      </HStack>
    </Box>
  )
}

export default AdvancedTradeItem
