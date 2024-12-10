import { VStack, Box, Flex, Text, Heading, Image } from "@chakra-ui/react";

const PlayerCard = () => {
    return (
        <>  
            <VStack spacing="0.5rem" py="1rem" minH="calc((80px * 5) + (1.5rem * 4))" minW="350px" bg="white" align="center" borderRadius="0.5rem">
                <Image
                    src="https://cdn.hoopshype.com/i/46/20/4d/zaccharie-risacher.png"
                    boxSize="250px"
                    borderRadius="1rem"
                    bg="ATL"
                    border="4px"
                    borderColor="black" />
                <Box p="0.5rem" w="100%" bg="ATL" align="center" justify="center">
                    <Heading as="h1" color="white" fontSize="24px">Zaccharie Risacher</Heading>
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