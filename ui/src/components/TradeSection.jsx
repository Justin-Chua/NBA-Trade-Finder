import { Container, VStack } from "@chakra-ui/react";
import TradeHeader from "./TradeHeader.jsx";
import TradeItem from "./TradeItem.jsx";
import AddTradeItem from "./AddTradeItem.jsx";

const TradeSection = () => {
    return (
        <Container p="0" mx="2rem" minH="850px" minW="850px" bg="gray.300" borderRadius="2rem" overflow="hidden">
            <TradeHeader />
            <VStack spacing="1.5rem" mt="2rem">
                <TradeItem />
                <TradeItem />
                <TradeItem />
                <TradeItem />
                <AddTradeItem />
            </VStack>
        </Container>
    );
};

export default TradeSection;