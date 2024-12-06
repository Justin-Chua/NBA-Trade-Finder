import { Flex, Button, Text, Image } from "@chakra-ui/react";

const TradeItem = () => {
    return (
        <Button p="2rem" mt="1rem" h="80px" w="350px" bg="white">
            <Image 
            src="https://seeklogo.com/images/A/atlanta-hawks-logo-A108D0AC8D-seeklogo.com.png"
            boxSize="50px" />
            <Flex grow="1" direction="column" align="center" justify="center">
                <Text>Zacharie Rissacher</Text>
                <Text fontWeight="light">$4,000,000</Text>
            </Flex>
        </Button>
    );
};

export default TradeItem;