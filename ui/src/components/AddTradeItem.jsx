import { useContext, useState } from 'react'
import {
  Button, Heading, Flex, VStack, Text,
  Modal, ModalOverlay, ModalContent, ModalHeader,
  ModalFooter, ModalBody, ModalCloseButton, Tooltip
} from '@chakra-ui/react'
import { PlusSquareIcon } from '@chakra-ui/icons'
import ModalItem from './ModalItem.jsx'
import { NBAContext } from '../NBAContext'
import PropTypes from 'prop-types'

const AddTradeItem = ({ id }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const { players, playerSelections, setPlayerSelections, teamSelections, modalSelection, setModalSelection } = useContext(NBAContext)
  const availablePlayers = Object.entries(players).filter(
    ([teamName]) => teamName !== teamSelections[id]?.name &&
    teamSelections.some(t => t?.name === teamName))

  const addPlayer = () => {
    setModalOpen(false)
    const updatedPlayerSelections = [...playerSelections]
    updatedPlayerSelections[id].push(modalSelection)
    setPlayerSelections(updatedPlayerSelections)
    setModalSelection(null)
  }

  return (
    <>
      <Tooltip label='Select a team in all sections' isDisabled={!teamSelections.some(t => t === null)}>
        <Button
          pl='2rem' pr='calc(1rem + 24px + (0.25rem / 2))' minH='80px' minW='350px' bg='white' borderRadius='0.5rem'
          _hover={{ bg: 'gray.200' }}
          onClick={() => setModalOpen(true)}
          isDisabled={teamSelections.some(t => t === null)}
        >
          <Flex grow='1' direction='row' align='center' justify='space-between'>
            <PlusSquareIcon boxSize='3rem' />
            <Heading flexGrow='1' as='h2' fontSize='1.25rem'>Add a player</Heading>
          </Flex>
        </Button>
      </Tooltip>

      <Modal
        isOpen={modalOpen} onClose={() => setModalOpen(false)}
        size='2xl' scrollBehavior='inside'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader ml='0.5rem'>
            Available Players
          </ModalHeader>
          <ModalCloseButton mr='0.5rem' />
          <ModalBody>
            <VStack gap='0.5rem' align='center' justify='center'>
              {availablePlayers.map(([teamName, players]) => (
                players.map((player) => {
                  return <ModalItem key={[teamName, player.details.name]} id={id} player={player} />
                })
              ))}
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Flex grow='1' direction='row' align='center' justify='space-between'>
              <Text ml='0.5rem' fontSize='1rem'><b>Selected Player: </b>{modalSelection?.details.name}</Text>
              <Button
                bg='gray.800' color='white' mr='0.5rem' onClick={addPlayer}
                _hover={{ bg: 'gray.200', color: 'gray.800' }}
                isDisabled={modalSelection === null}
              >
                Add Player
              </Button>
            </Flex>
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
