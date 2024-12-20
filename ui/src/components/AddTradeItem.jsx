import { useContext, useState } from 'react'
import { 
  Button, Heading, Flex, VStack,
  Modal, ModalOverlay, ModalContent, ModalHeader, 
  ModalFooter, ModalBody, ModalCloseButton
} from '@chakra-ui/react'
import { PlusSquareIcon } from '@chakra-ui/icons'
import AdvancedTradeItem from './AdvancedTradeItem.jsx'
import { NBAContext } from '../NBAContext'
import PropTypes from 'prop-types'


const AddTradeItem = ({ id }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const { players, teamSelections } = useContext(NBAContext)
  const availablePlayers = Object.entries(players).filter(
    ([teamName, _]) => teamName !== teamSelections[id]?.name 
    && teamSelections.some(team => team?.name === teamName))

  console.log('Avaialble players are: ', availablePlayers)

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
        size='2xl' scrollBehavior='inside'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader ml='0.5rem'>Available Players</ModalHeader>
          <ModalCloseButton mr='0.5rem' />
          <ModalBody>
            <VStack gap='0.5rem' align='center' justify='center'>
              {availablePlayers.map(([teamName, players]) => (
                players.map((player) => {
                  return <AdvancedTradeItem key={[teamName, player.details.name]} player={player} />
                })
              ))}
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

AddTradeItem.propTypes = {
  id: PropTypes.number.isRequired
}

export default AddTradeItem
