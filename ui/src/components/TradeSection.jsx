import { Container } from "@chakra-ui/react";
import TradeHeader from "./TradeHeader.jsx";

const TradeSection = () => {

    return (
        <>
            <Container p="0" minH="850px" minW="850px" bg="blue.400" borderRadius="2rem" overflow="hidden">
                <TradeHeader />
            </Container>
        </>
    );
};

export default TradeSection;