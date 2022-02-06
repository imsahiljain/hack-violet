import { Box, Button, SimpleGrid, Image } from "@chakra-ui/react";
import Child from "../age-content/child";
import Card from "../card/card";
// import Card from "../card/card-no-image";

const BlogGroup = () => {
  return (
    <SimpleGrid columns={4} spacing={10} m="150">
      <Card
        title="Yoga is the most im..."
        desc="Story of my ife"
        image="https://images.unsplash.com/photo-1611094607507-8c8173e5cf33?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8aGVhbHRofHx8fHx8MTY0NDE1NDY5Ng&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920"
      />
      <Card
        title="Health is considered..."
        desc="I love my life"
        image="https://images.unsplash.com/photo-1601715346099-797c49180705?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8aGVhbHRofHx8fHx8MTY0NDE1NDYwOA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920"
      />
      <Card
        title="Nutrition and health..."
        desc="Unity is strength"
        image="https://images.unsplash.com/photo-1540420773420-3366772f4999?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8aGVhbHRofHx8fHx8MTY0NDE1NDYxNA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920"
      />
      <Card
        title="Meditation is a..."
        desc="Always with you"
        image="https://images.unsplash.com/photo-1508672019048-805c876b67e2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8aGVhbHRofHx8fHx8MTY0NDE1NDY4MA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920"
      />
    </SimpleGrid>
  );
};

export default BlogGroup;
