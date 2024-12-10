import { useState } from 'react'
import { Flex, Image, Heading, Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { ArrowDownIcon } from '@chakra-ui/icons'

const TradeHeader = () => {
const [teamSelection, setTeamSelection] = useState('Select option...')

	return (
		<Flex pl='calc(3rem + 25px + (100px / 2))' pr='3rem' h='100px' bg='ATL' align='center' justify='space-between' overflow='hidden'>
			<Image 
			src='https://seeklogo.com/images/A/atlanta-hawks-logo-A108D0AC8D-seeklogo.com.png'
			boxSize='200px'
			opacity='50%' 
			/>
			<Menu>
				<MenuButton as={ Button } leftIcon={ <ArrowDownIcon /> } bg='white' h='70px' w='350px' fontSize='24px' border='4px'>
					<Heading as='h1' fontSize='24px'>{ teamSelection }</Heading>
				</MenuButton>
				<MenuList maxH='270px' w='350px' fontSize='24px' border='4px' overflowY='auto'>
					<MenuItem pl='1rem' h='50px' onClick={ () => setTeamSelection('Atlanta Hawks') }
					icon={ <Image src='https://seeklogo.com/images/A/atlanta-hawks-logo-A108D0AC8D-seeklogo.com.png' boxSize='24px'/> }
					iconSpacing='1rem'>
						<Heading as='h1' fontSize='24px' fontWeight='light'>Atlanta Hawks</Heading>
					</MenuItem>
					<MenuItem pl='1rem' h='50px' onClick={ () => setTeamSelection('Boston Celtics') }
					icon={ <Image src='https://seeklogo.com/images/A/atlanta-hawks-logo-A108D0AC8D-seeklogo.com.png' boxSize='24px'/> }
					iconSpacing='1rem'>
						<Heading as='h1' fontSize='24px' fontWeight='light'>Boston Celtics</Heading>
					</MenuItem>
				</MenuList>
			</Menu>
		</Flex>        
	)
}

export default TradeHeader
