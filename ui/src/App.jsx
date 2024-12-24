import TradeSection from './components/TradeSection.jsx'
import { Flex } from '@chakra-ui/react'
import { NBAProvider } from './NBAProvider.jsx'

const App = () => {
  return (
    <NBAProvider>
      <Flex pt='2rem' direction='row' align='center' justify='center'>
        <TradeSection id={0} />
        <TradeSection id={1} />
      </Flex>
    </NBAProvider>
  )
}

export default App
