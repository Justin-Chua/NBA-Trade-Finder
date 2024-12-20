import { Box, HStack, VStack, Text, Heading, Image } from '@chakra-ui/react'
import PropTypes from 'prop-types'

const AdvancedTradeItem = ({ player }) => {
  const currentSalary = player.contract.salaries[0].toLocaleString('en-US')

  return (
    <Box 
      px='1rem' py='0.5rem' maxH='4rem' minW='560px' 
      bg='gray.200' borderRadius='0.5rem'
      align='center' justify='center'
    >
      <HStack align='center' justify='space-between'>
        <HStack gap='1rem'>
          <Image
            src={player.details.headshot}
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
            src='https://seeklogo.com/images/A/atlanta-hawks-logo-A108D0AC8D-seeklogo.com.png'
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
