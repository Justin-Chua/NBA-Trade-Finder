import { useContext } from 'react'
import {
  Flex, Image, Heading, Button,
  Menu, MenuButton, MenuList, MenuItem, Tooltip
} from '@chakra-ui/react'
import { ArrowDownIcon } from '@chakra-ui/icons'
import { NBAContext } from '../NBAContext'
import PropTypes from 'prop-types'

const TradeHeader = ({ id }) => {
  const {
    teams, teamSelections, setTeamSelections,
    playerSelections, setPlayerSelections, playerCardSelections, setPlayerCardSelections
  } = useContext(NBAContext)

  const handleTeamSelection = (name) => {
    const updatedTeamSelections = [...teamSelections]
    updatedTeamSelections[id] = teams[name]
    setTeamSelections(updatedTeamSelections)
    // clear the player selections and player card selections for all other trade sections
    const updatedPlayerSelections = [...playerSelections]
    const updatedPlayerCardSelections = [...playerCardSelections]
    for (let i = 0; i < updatedPlayerSelections.length; i++) {
      if (i !== id) {
        updatedPlayerSelections[i] = []
        updatedPlayerCardSelections[i] = null
      }
    }
    setPlayerSelections(updatedPlayerSelections)
    setPlayerCardSelections(updatedPlayerCardSelections)
  }

  return (
    <Flex
      pl='calc(3rem + (25px / 2) + (100px / 2))' pr='3rem' h='100px'
      bg={teams[teamSelections[id]?.name]?.abbreviation || 'gray.800'}
      align='center' justify='space-between' overflow='hidden'
    >
      <Image
        src={`/resources/teams/${teams[teamSelections[id]?.name]?.abbreviation}.svg`}
        boxSize='225px'
        opacity='75%'
        visibility={teamSelections[id] === null ? 'hidden' : 'visible'}
      />
      <Menu>
        <MenuButton
          as={Button} leftIcon={<ArrowDownIcon />} bg='white' h='70px' w='350px' fontSize='24px'
          borderRadius='0.5rem' border='4px' borderColor='gray.800'
        >
          <Heading as='h1' fontSize='24px'>{teamSelections[id]?.name || 'Select option...'}</Heading>
        </MenuButton>
        <MenuList maxH='265px' w='350px' fontSize='24px' border='4px' borderColor='gray.800' overflowY='auto'>
          {Object.values(teams).map((team) => (
            <Tooltip
              key={team._id} label='Team has been selected' placement='left'
              isDisabled={!teamSelections.some(t => t?.name === team.name)}
            >
              <MenuItem
                key={team._id} flexGrow='1'
                px='1rem' h='50px' onClick={() => handleTeamSelection(team.name)}
                icon={<Image src={`/resources/teams/${team.abbreviation}.svg`} boxSize='2rem' />}
                iconSpacing='1rem'
                isDisabled={teamSelections.some(t => t?.name === team.name)}
              >
                <Heading as='h1' fontSize='22px' fontWeight='light'>{team.name}</Heading>
              </MenuItem>
            </Tooltip>
          ))}
        </MenuList>
      </Menu>
    </Flex>
  )
}

TradeHeader.propTypes = {
  id: PropTypes.number.isRequired
}

export default TradeHeader
