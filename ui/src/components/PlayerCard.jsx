import { useContext } from 'react'
import { VStack, Box, Flex, Text, Heading, Image } from '@chakra-ui/react'
import { NBAContext } from '../NBAContext'
import PropTypes from 'prop-types'

const PlayerCard = ({ id }) => {
  const { teams, playerCardSelections } = useContext(NBAContext)
  let totalSalary = 0
  for (let i = 0; i < playerCardSelections[id]?.contract.salaries.length; i++) {
    totalSalary += playerCardSelections[id].contract.salaries[i]
  }

  return (
    <VStack
      spacing='1rem' py='1.25rem' minH='calc((80px * 5) + (1.5rem * 4))'
      minW='350px' bg='white' align='center' justify='center' borderRadius='0.5rem'
    >
      <Image
        src={playerCardSelections[id]?.details.headshot || '/resources/placeholders/player-headshot-placeholder.png'}
        boxSize='15rem'
        borderRadius='0.5rem'
        bg={teams[playerCardSelections[id]?.team_name]?.abbreviation || 'gray.200'}
        border='4px'
        borderColor='gray.800'
      />
      <Box
        p='0.5rem' w='100%' bg={teams[playerCardSelections[id]?.team_name]?.abbreviation || 'gray.200'}
        align='center' justify='center'
      >
        <Heading as='h1' color='white' fontSize='24px'>{playerCardSelections[id]?.details.name || '-'}</Heading>
      </Box>
      <Flex grow='1' direction='column' align='center' justify='space-between'>
        <Text fontSize='20px'><b>Position: </b>{playerCardSelections[id]?.details.position || '-'}</Text>
        <Text fontSize='20px'><b>Number: </b>{playerCardSelections[id]?.details.number || '-'}</Text>
        <Text fontSize='20px'><b>Salary: </b>{`$${(playerCardSelections[id]?.contract.salaries[0] || 0).toLocaleString('en-us')}`}</Text>
        <Text fontSize='20px'>
          <b>Total: </b>{`${playerCardSelections[id]?.contract.length || 0}
          YR${playerCardSelections[id]?.contract.length !== 1 ? 'S' : ''} | $${totalSalary.toLocaleString('en-us')}`}
        </Text>
      </Flex>
    </VStack>
  )
}

PlayerCard.propTypes = {
  id: PropTypes.number.isRequired
}

export default PlayerCard
