import { useContext, useState } from 'react'
import { Fade, Box, Flex, HStack, CloseButton, Text, Heading, Image } from '@chakra-ui/react'
import { NBAContext } from '../NBAContext'
import PropTypes from 'prop-types'

const TradeItem = ({ id, player }) => {
  const [hovered, setHovered] = useState(false)
  const { teams, playerSelections, setPlayerSelections, playerCardSelections, setPlayerCardSelections } = useContext(NBAContext)

  const removePlayer = () => {
    let updatedPlayerSelections = [...playerSelections]
    updatedPlayerSelections[id] = updatedPlayerSelections[id].filter(p => p.details.name !== player.details.name)
    setPlayerSelections(updatedPlayerSelections)
    // check if player is currently displayed on PlayerCard
    if (playerCardSelections[id] === player) {
      // if so, we also reset the selection to null
      let updatedPlayerCardSelections = [...playerCardSelections]
      updatedPlayerCardSelections[id] = playerSelections[id][playerSelections[id].length - 1]
      setPlayerCardSelections(updatedPlayerCardSelections)
    }
  }

  const updatePlayerCard = () => {
    const updatedPlayerCardSelections = [...playerCardSelections]
    updatedPlayerCardSelections[id] = player
    setPlayerCardSelections(updatedPlayerCardSelections)
  }

  return (
    <Box
      pl='2rem' pr='1rem' py='1rem' minH='5rem' minW='350px' bg='white'
      borderRadius='0.5rem' align='center' justify='center'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      _hover={{ bg: 'gray.200' }}
    >
      <HStack>
        <Image
          src={`/resources/teams/${teams[player.team_name]?.abbreviation}.svg`}
          boxSize='3rem'
        />
        <Flex
          grow='1' direction='column' gap='4px' align='center' justify='center'
          _hover={{ cursor: 'pointer' }}
          onClick={() => updatePlayerCard()}
        >
          <Heading as='h2' fontSize='1rem'>{player.details.name}</Heading>
          <Text fontWeight='light' fontSize='1rem'>{`$${player.contract.salaries[0].toLocaleString('en-US')}`}</Text>
        </Flex>
        <Fade in={hovered}>
          <CloseButton
            size='sm'
            _hover={{ bg: 'white' }}
            onClick={() => removePlayer()}
          />
        </Fade>
      </HStack>
    </Box>
  )
}

TradeItem.propTypes = {
  id: PropTypes.number.isRequired,
  player: PropTypes.shape({
    team_name: PropTypes.string.isRequired,
    details: PropTypes.shape({
      name: PropTypes.string.isRequired,
      headshot: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired
    }).isRequired,
    contract: PropTypes.shape({
      salaries: PropTypes.array.isRequired,
      length: PropTypes.number.isRequired
    }).isRequired
  }).isRequired
}

export default TradeItem
