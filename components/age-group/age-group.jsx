import { Box, Button, SimpleGrid } from "@chakra-ui/react";
import Child from "../age-content/child";

const AgeGroup = () => {
  return (
    <SimpleGrid columns={3} spacing={10} m="150">
      <Box
        boxShadow="2xl"
        rounded="md"
        border="1px"
        borderColor="gray.700"
        width="450px"
        height="auto"
      >
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
          <Child />
        </Box>
      </Box>
    </SimpleGrid>
  );
};

export default AgeGroup;
