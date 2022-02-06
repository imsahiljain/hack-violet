import { Box, Button, SimpleGrid } from "@chakra-ui/react";
import Card from "../card/card";
import CardNoImage from "../card/card-no-image";

const ChatGroup = () => {
  return (
    <SimpleGrid columns={5} spacing={10} m="150">
      <CardNoImage title="title" desc="desc" />
      <CardNoImage title="title" desc="desc" />
      <CardNoImage title="title" desc="desc" />
      <CardNoImage title="title" desc="desc" />
      <CardNoImage title="title" desc="desc" />
      <CardNoImage title="title" desc="desc" />
      <CardNoImage title="title" desc="desc" />
      <CardNoImage title="title" desc="desc" />
      <CardNoImage title="title" desc="desc" />
      <CardNoImage title="title" desc="desc" />
    </SimpleGrid>
  );
};

export default ChatGroup;
