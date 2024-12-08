import { Box, Flex, VStack } from "@chakra-ui/react";
import TradeHeader from "./TradeHeader.jsx";
import PlayerCard from "./PlayerCard.jsx";
import TradeItem from "./TradeItem.jsx";
import AddTradeItem from "./AddTradeItem.jsx";
import TradeFooter from "./TradeFooter.jsx";

const TradeSection = () => {
    return (
        <Box p="0" mx="2rem" minH="850px" minW="850px" bg="gray.300" borderRadius="2rem" overflow="hidden">
            <TradeHeader />
            <Flex m="2rem" direction="row" gap="2rem" align="center" justify="center">
                <PlayerCard />
                <VStack spacing="1.5rem">
                    <TradeItem />
                    <TradeItem />
                    <TradeItem />
                    <TradeItem />
                    <AddTradeItem />
                </VStack>
            </Flex>
            <TradeFooter />
        </Box>
    );
};

export default TradeSection;