import { useContext, useState } from 'react'
import { Flex, Image, Heading, Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { ArrowDownIcon } from '@chakra-ui/icons'
import { NBAContext } from '../NBAContext'

const TradeHeader = () => {
  const [teamSelection, setTeamSelection] = useState('Select option...')
  const { teams } = useContext(NBAContext)

  return (
    <Flex
      pl='calc(3rem + (25px / 2) + (100px / 2))' pr='3rem' h='100px'
      bg={teams[teamSelection]?.abbreviation || 'gray.800'}
      align='center' justify='space-between' overflow='hidden'
    > 
      <Image
        src={`/resources/teams/${teams[teamSelection]?.abbreviation}.svg`}
        boxSize='225px'
        opacity='75%'
        visibility={teamSelection === 'Select option...' ? 'hidden' : 'visible'}
      />
      <Menu>
        <MenuButton 
          as={Button} leftIcon={<ArrowDownIcon />} bg='white' h='70px' w='350px' fontSize='24px' 
          borderRadius='0.5rem' border='4px' borderColor='black'
        >
          <Heading as='h1' fontSize='24px'>{teamSelection}</Heading>
        </MenuButton>
        <MenuList maxH='265px' w='350px' fontSize='24px' border='4px' overflowY='auto'>
          {Object.values(teams).map((team) => (
            <MenuItem
              key={team._id}
              pl='1rem' h='50px' onClick={() => setTeamSelection(team.name)}
              icon={<Image src={`/resources/teams/${team.abbreviation}.svg`} boxSize='2rem' />}
              iconSpacing='1rem'
            >
              <Heading as='h1' fontSize='22px' fontWeight='light'>{team.name}</Heading>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Flex>
  )
}

export default TradeHeader
