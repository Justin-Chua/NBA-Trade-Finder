import { useContext } from 'react'
import { Box, HStack, VStack, Text, Heading } from '@chakra-ui/react'
import { NBAContext } from '../NBAContext'
import PropTypes from 'prop-types'

const TradeFooter = ({ id }) => {
  const { teamSelections, playerSelections } = useContext(NBAContext)
  const SALARY_CAP = 140588000
  const FIRST_APRON = 178132000

  const incomingSalary = () => {
    let salary = 0
    for (let i = 0; i < playerSelections[id]?.length; i++) {
      salary += playerSelections[id][i]?.contract?.salaries[0]
    }
    return salary
  }

  const outgoingSalary = () => {
    let salary = 0
    let selectedTeamName = teamSelections[id]?.name
    for (let i = 0; i < playerSelections?.length; i++) {
      for (let j = 0; j < playerSelections[i]?.length; j++) {
        if (playerSelections[i][j]?.team_name === selectedTeamName) {
          salary += playerSelections[i][j]?.contract?.salaries[0]
        }
      }
    }
    return salary
  }

  const netSalary = () => { return incomingSalary() - outgoingSalary() }

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
          <Text color='white' fontSize='1.5rem'>{`$${(SALARY_CAP - teamSelections[id]?.salary - netSalary() || 0).toLocaleString('en-us')}`}</Text>
        </HStack>
        <HStack justify='space-between' width='100%'>
          <Text color='white' fontWeight='bold' fontSize='1.5rem'>Net Salary:</Text>
          <Text color='white' fontSize='1.5rem'>{`$${(netSalary() || 0).toLocaleString('en-us')}`}</Text>
        </HStack>
      </VStack>
    </HStack>
  )
}

TradeFooter.propTypes = {
  id: PropTypes.number.isRequired
}

export default TradeFooter
