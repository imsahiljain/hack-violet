import { Box, Button, SimpleGrid, Image } from "@chakra-ui/react";
import Child from "../age-content/child";

const Card = () => {
  return (
    // <SimpleGrid columns={4} spacing={10} m="150">
    <Box
      mt="-10"
      boxShadow="2xl"
      rounded="md"
      border="1px"
      borderColor="gray.700"
      width="auto"
      height="auto"
    >
      <Image
        src="https://www.thoughtco.com/thmb/9-TaSUt-qCdOp1Xh3P43mutTmeA=/2121x1414/filters:fill(auto,1)/GettyImages-887987150-5c770377c9e77c00011c82e6.jpg"
        alt="Image"
        width="fit-content"
        //   height="200px"
      />

      <Box p="6">
        <Box
          mt="1"
          fontWeight="semibold"
          fontSize="xl"
          lineHeight="tight"
          isTruncated
        >
          sasa...
        </Box>
        <Box>sasa..</Box>
        <br />
        <Button colorScheme="blue">Read more</Button>
      </Box>
    </Box>
    // </SimpleGrid>
  );
};

export default Card;
