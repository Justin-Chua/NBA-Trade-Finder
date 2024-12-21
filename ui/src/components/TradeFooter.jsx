import { useContext } from 'react'
import { Box, HStack, VStack, Text, Heading } from '@chakra-ui/react'
import { NBAContext } from '../NBAContext'
import PropTypes from 'prop-types'

const TradeFooter = ({ id }) => {
  const { teamSelections } = useContext(NBAContext)
  const SALARY_CAP = 140588000
  const FIRST_APRON = 178132000
  const SECOND_APRON = 188931000

  return (
    <HStack px='3rem' h='calc(850px - 100px - (2rem * 2) - 496px)' bg='gray.800' align='center' justify='space-between'>
      <Box p='1rem' width='40%' bg='white' align='center' justify='center' borderRadius='0.5rem'>
        <Heading as='h3' color='red' fontSize='2rem'>Invalid Trade</Heading>
      </Box>
      <VStack spacing='0.5rem' width='50%'>
        <HStack justify='space-between' width='100%'>
          <Text color='white' fontWeight='bold' fontSize='1.5rem'>Team Salary:</Text>
          <Text color='white' fontSize='1.5rem'>{`$${(teamSelections[id]?.salary || 0).toLocaleString('en-us')}`}</Text>
        </HStack>
        <HStack justify='space-between' width='100%'>
          <Text color='white' fontWeight='bold' fontSize='1.5rem'>Cap Room:</Text>
          <Text color='white' fontSize='1.5rem'>{`$${(SALARY_CAP - teamSelections[id]?.salary || 0).toLocaleString('en-us')}`}</Text>
        </HStack>
        <HStack justify='space-between' width='100%'>
          <Text color='white' fontWeight='bold' fontSize='1.5rem'>Net Salary:</Text>
          <Text color='white' fontSize='1.5rem'>-$99,999,999</Text>
        </HStack>
      </VStack>
    </HStack>
  )
}

TradeFooter.propTypes = {
  id: PropTypes.number.isRequired
}

export default TradeFooter
