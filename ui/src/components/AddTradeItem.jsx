import { Button } from '@chakra-ui/react'
import { PlusSquareIcon } from '@chakra-ui/icons'

const AddTradeItem = () => {
  return (
    <Button p='2rem' minH='80px' minW='350px' bg='white'>
      <PlusSquareIcon boxSize='50px' />
    </Button>
  )
}

export default AddTradeItem
