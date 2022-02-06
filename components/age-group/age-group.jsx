import { Box, SimpleGrid } from "@chakra-ui/react";
import Adult from "../age-content/adult";
import Child from "../age-content/child";
import Teen from "../age-content/teen";

const AgeGroup = () => {
  return (
    <SimpleGrid columns={3} spacing={10} m="150">
      <Box
        mt="-10"
        boxShadow="2xl"
        rounded="md"
        border="1px"
        borderColor="gray.700"
        width="auto"
        height="auto"
      >
        <Box p="6">
          <Box
            mt="1"
            fontWeight="semibold"
            fontSize="xl"
            lineHeight="tight"
            fontFamily="Work Sans"
            isTruncated
          >
            Childhood (8-12 years)
          </Box>
          <br />
          <Child />
        </Box>
      </Box>

      <Box
        mt="-10"
        boxShadow="2xl"
        rounded="md"
        border="1px"
        borderColor="gray.700"
        width="auto"
        height="auto"
      >
        <Box p="6">
          <Box
            mt="1"
            fontWeight="semibold"
            fontSize="xl"
            lineHeight="tight"
            fontFamily="Work Sans"
            isTruncated
          >
            Teenage (13-17 years)
          </Box>
          <br />
          <Teen />
        </Box>
      </Box>

      <Box
        mt="-10"
        boxShadow="2xl"
        rounded="md"
        border="1px"
        borderColor="gray.700"
        width="auto"
        height="auto"
      >
        <Box p="6">
          <Box
            mt="1"
            fontWeight="semibold"
            fontSize="xl"
            fontFamily="Work Sans"
            lineHeight="tight"
            isTruncated
          >
            Adult (18+ years)
          </Box>
          <br />
          <Adult />
        </Box>
      </Box>
    </SimpleGrid>
  );
};

export default AgeGroup;
