import { Flex, Button, Text, Image } from "@chakra-ui/react";

const TradeItem = () => {
    return (
        <Button p="2rem" minH="80px" minW="350px" bg="white">
            <Image 
                src="https://seeklogo.com/images/A/atlanta-hawks-logo-A108D0AC8D-seeklogo.com.png"
                boxSize="50px" />
            <Flex grow="1" direction="column" gap="4px" align="center" justify="center">
                <Text>Zaccharie Risacher</Text>
                <Text fontWeight="light">$12,569,040</Text>
            </Flex>
        </Button>
    );
};

export default TradeItem;