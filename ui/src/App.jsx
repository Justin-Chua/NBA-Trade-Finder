import TradeSection from "./components/TradeSection.jsx";
import { Flex } from "@chakra-ui/react";

const App = () => {
  return (
    <>
      <Flex pt="2rem" direction="row" align="center" justify="center">
        <TradeSection></TradeSection>
        <TradeSection></TradeSection>
      </Flex>
    </>
  )
};

export default App;
