import { Flex, Image, Select } from "@chakra-ui/react";

const TradeHeader = () => {
    return (
        <Flex px="6rem" h="100px" bg="red.600" gap="6rem" align="center" justify="center" overflow="hidden">
            <Image 
            src="https://seeklogo.com/images/A/atlanta-hawks-logo-A108D0AC8D-seeklogo.com.png"
            boxSize="200px"
            opacity="50%" />
            <Select h="70px" w="60%" bg="white" textAlign="center" fontSize="24px" fontWeight="bold">
                <option value="Atlanta Hawks">Atlanta Hawks</option>
                <option value="Boston Celtics">Boston Celtics</option>
                <option value="Portland Trail Blazers">Portland Trail Blazers</option>
            </Select>
        </Flex>        
    );
};

export default TradeHeader;