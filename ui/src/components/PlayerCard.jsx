import { VStack, Box, Flex, Text, Image } from "@chakra-ui/react";

const PlayerCard = () => {
    return (
        <>  
            <VStack spacing="0.5rem" py="1rem" minH="calc((80px * 5) + (1.5rem * 4))" minW="350px" bg="white" align="center">
                <Image
                    src="https://cdn.hoopshype.com/i/46/20/4d/zaccharie-risacher.png"
                    boxSize="225px"
                    borderRadius="1rem"
                    border="4px"
                    borderColor="black" />
                <Box p="6px" w="100%" bg="red.600" align="center" justify="center">
                    <Text textColor="white" fontSize="24px" fontWeight="semibold">Zaccharie Risacher</Text>
                </Box>
                <Flex grow="1" direction="column" gap="0.5rem" align="center" justify="center">
                    <Text fontSize="20px"><b>Position:</b> F</Text>
                    <Text fontSize="20px"><b>Number:</b> #10</Text>
                    <Text fontSize="20px"><b>Salary:</b> $12,569,040</Text>
                    <Text fontSize="20px"><b>Total:</b> 5YRS | $81,435,926</Text>
                </Flex>
            </VStack>
        </>
    );
};

export default PlayerCard;