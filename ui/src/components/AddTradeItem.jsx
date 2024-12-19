import { Button, Heading, Flex } from '@chakra-ui/react'
import { PlusSquareIcon } from '@chakra-ui/icons'

const AddTradeItem = () => {
  return (
    <Button
      pl='2rem' pr='calc(1rem + 24px + (0.25rem / 2))' minH='80px' minW='350px' bg='white' borderRadius='0.5rem'
      _hover={{bg: 'gray.200'}}
    >
      <Flex grow='1' direction='row' align='center' justify='space-between'>
        <PlusSquareIcon boxSize='3rem' />
        <Heading flexGrow='1' as='h2' fontSize='1.25rem'>Add a player</Heading>
      </Flex>
    </Button>
  )
}

export default AddTradeItem
