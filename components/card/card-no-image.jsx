import { Box, Button } from "@chakra-ui/react";

const CardNoImage = ({ title, desc }) => {
  return (
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
          isTruncated
        >
          {title}
        </Box>
        <Box>{desc}</Box>
        <br />
        <Button colorScheme="blue">Read more</Button>
      </Box>
    </Box>
  );
};

export default CardNoImage;
