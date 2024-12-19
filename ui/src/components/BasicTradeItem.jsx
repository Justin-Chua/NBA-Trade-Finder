import { useState } from 'react'
import { Fade, Box, Flex, HStack, CloseButton, Text, Heading, Image } from '@chakra-ui/react'

const BasicTradeItem = () => {
  const [hovered, setHovered] = useState(false)

  return (
    <Box 
      pl='2rem' pr='1rem' py='1rem' minH='5rem' minW='350px' bg='white' 
      borderRadius='0.5rem' align='center' justify='center'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      _hover={{bg: 'gray.200'}}
    >
      <HStack>
        <Image
          src='https://seeklogo.com/images/A/atlanta-hawks-logo-A108D0AC8D-seeklogo.com.png'
          boxSize='3rem'
        />
        <Flex 
          grow='1' direction='column' gap='4px' align='center' justify='center'
          _hover={{cursor: 'pointer'}}
          onClick={() => console.log('Clicked on player info')} // Added as placeholder
          >
          <Heading as='h2' fontSize='1rem'>Zaccharie Risacher</Heading>
          <Text fontWeight='light' fontSize='1rem'>$12,569,040</Text>
        </Flex>
        <Fade in={hovered}>
          <CloseButton 
            size='sm'
            visibility={hovered ? 'visible' : 'hidden'}
            _hover={{bg: 'white'}}
            onClick={() => console.log('Close button clicked')} // Added as placeholder
          />
        </Fade>
      </HStack>
    </Box>
  )
}

export default BasicTradeItem
