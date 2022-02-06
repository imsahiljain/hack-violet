import { Box, Button, SimpleGrid } from "@chakra-ui/react";
import Card from "../card/card";
import CardNoImage from "../card/card-no-image";

const ChatGroup = () => {
  return (
    <SimpleGrid columns={3} spacing={10} m="150">
      <CardNoImage title="Dr. John Doe" desc="Nutrition Specialist" />
      <CardNoImage title="Dr. Olive Yew" desc="Pshycologist" />
      <CardNoImage title="Dr. Alice Grater" desc="Obstetrician" />
    </SimpleGrid>
  );
};

export default ChatGroup;
