import { useContext } from 'react'
import { Box, HStack, VStack, Text, Heading, Image } from '@chakra-ui/react'
import { NBAContext } from '../NBAContext'
import PropTypes from 'prop-types'

const AdvancedTradeItem = ({ player }) => {
  const currentSalary = player.contract.salaries[0].toLocaleString('en-US')
  const { teams } = useContext(NBAContext)

  return (
    <Box 
      px='1rem' py='0.5rem' maxH='4rem' minW='560px' 
      bg='gray.200' borderRadius='0.5rem'
      align='center' justify='center'
    >
      <HStack align='center' justify='space-between'>
        <HStack gap='1rem'>
          <Image
            src={player.details.headshot || '/resources/placeholders/player-headshot-placeholder.png'}
            boxSize='3rem'
          />
          <VStack gap='0.25rem' align='start'>
            <Heading as='h2' fontSize='1rem'>{player.details.name} | {player.details.position}</Heading>
            <Text fontWeight='light' fontSize='0.75rem'>
              {player.contract.length} Year{player.contract.length !== 1 ? 's' : ''}
            </Text>
          </VStack>
        </HStack>
        <HStack gap='4rem'>
          <Text fontWeight='light' fontSize='1rem'>${currentSalary}</Text>
          <Image
            src={`/resources/teams/${teams[player.team_name].abbreviation}.svg`}
            boxSize='2rem'
          />
        </HStack>
      </HStack>
    </Box>
  )
}

AdvancedTradeItem.propTypes = {
  player: PropTypes.shape({
    team_name: PropTypes.string.isRequired,
    details: PropTypes.shape({
      name: PropTypes.string.isRequired,
      headshot: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
    }).isRequired,
    contract: PropTypes.shape({
      salaries: PropTypes.array.isRequired,
      length: PropTypes.number.isRequired
    }).isRequired
  }).isRequired
}

export default AdvancedTradeItem
