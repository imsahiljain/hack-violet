import { Box, Button, SimpleGrid, Image } from "@chakra-ui/react";
import Child from "../age-content/child";
import Card from "../card/card";

const BlogGroup = () => {
  return (
    <SimpleGrid columns={4} spacing={10} m="150">
      <Card />
      <Card />
      <Card />
      <Card />
    </SimpleGrid>
  );
};

export default BlogGroup;
