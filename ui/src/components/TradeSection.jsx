import { useContext } from 'react'
import { Box, Flex, VStack } from '@chakra-ui/react'
import TradeHeader from './TradeHeader.jsx'
import PlayerCard from './PlayerCard.jsx'
import BasicTradeItem from './BasicTradeItem.jsx'
import AddTradeItem from './AddTradeItem.jsx'
import TradeFooter from './TradeFooter.jsx'
import { NBAContext } from '../NBAContext'
import PropTypes from 'prop-types'

const TradeSection = ({ id }) => {
  const { playerSelections } = useContext(NBAContext)

  return (
    <Box p='0' mx='2rem' minH='850px' minW='850px' bg='gray.300' borderRadius='2rem' overflow='hidden'>
      <TradeHeader id={id} />
      <Flex px='1rem' m='2rem' direction='row' gap='2rem' align='flex-start' justify='space-between'>
        <PlayerCard />
        <VStack spacing='1.5rem'>
          {playerSelections[id].map((player) => (
            <BasicTradeItem key={[player.team_name, player.details.name]} player={player} />
          ))}
          <AddTradeItem id={id} />
        </VStack>
      </Flex>
      <TradeFooter />
    </Box>
  )
}

TradeSection.propTypes = {
  id: PropTypes.number.isRequired
}

export default TradeSection
