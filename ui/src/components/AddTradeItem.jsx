import { useState } from 'react'
import { 
  Button, Heading, Flex, VStack,
  Modal, ModalOverlay, ModalContent, ModalHeader, 
  ModalFooter, ModalBody, ModalCloseButton
} from '@chakra-ui/react'
import { PlusSquareIcon } from '@chakra-ui/icons'
import AdvancedTradeItem from './AdvancedTradeItem.jsx'

const AddTradeItem = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const addPlayer = () => {
    // TODO: add player to context, which will update UI
    setModalOpen(false)
    console.log('Player added')
  }

  return (
    <>
      <Button
        pl='2rem' pr='calc(1rem + 24px + (0.25rem / 2))' minH='80px' minW='350px' bg='white' borderRadius='0.5rem'
        _hover={{bg: 'gray.200'}}
        onClick={() => setModalOpen(true)} // Added as placeholder
      >
        <Flex grow='1' direction='row' align='center' justify='space-between'>
          <PlusSquareIcon boxSize='3rem' />
          <Heading flexGrow='1' as='h2' fontSize='1.25rem'>Add a player</Heading>
        </Flex>
      </Button>

      <Modal 
        isOpen={modalOpen} onClose={() => setModalOpen(false)}
        size='xl' colorScheme='ATL' scrollBehavior='inside'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader ml='0.5rem'>Available Players</ModalHeader>
          <ModalCloseButton mr='0.5rem' />
          <ModalBody>
            <VStack gap='0.5rem' align='center' justify='center'>
              <AdvancedTradeItem />
              <AdvancedTradeItem />
              <AdvancedTradeItem />
              <AdvancedTradeItem />
              <AdvancedTradeItem />
              <AdvancedTradeItem />
              <AdvancedTradeItem />
              <AdvancedTradeItem />
              <AdvancedTradeItem />
              <AdvancedTradeItem />
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button 
              bg='gray.800' color='white' onClick={addPlayer}
              _hover={{bg: 'gray.200', color: 'gray.800'}}
            >
              Add Player
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AddTradeItem
