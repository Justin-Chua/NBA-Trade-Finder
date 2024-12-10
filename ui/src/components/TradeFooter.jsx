import { Box, HStack, VStack, Text, Heading } from '@chakra-ui/react'

const TradeFooter = () => {
  return (
    <HStack px='3rem' h='calc(850px - 100px - (2rem * 2) - 496px)' bg='black' align='center' justify='space-between'>
      <Box p='1rem' width='40%' bg='white' align='center' justify='center' borderRadius='0.5rem'>
        <Heading as='h3' color='red' fontSize='2rem'>Invalid Trade</Heading>
      </Box>
      <VStack spacing='0.5rem' width='50%'>
        <HStack justify='space-between' width='100%'>
          <Text color='white' fontWeight='bold' fontSize='1.5rem'>Team Salary:</Text>
          <Text color='white' fontSize='1.5rem'>$199,024,037</Text>
        </HStack>
        <HStack justify='space-between' width='100%'>
          <Text color='white' fontWeight='bold' fontSize='1.5rem'>Cap Room:</Text>
          <Text color='white' fontSize='1.5rem'>-$48,436,037</Text>
        </HStack>
        <HStack justify='space-between' width='100%'>
          <Text color='white' fontWeight='bold' fontSize='1.5rem'>Net Salary:</Text>
          <Text color='white' fontSize='1.5rem'>-$99,999,999</Text>
        </HStack>
      </VStack>
    </HStack>
  )
}

export default TradeFooter
