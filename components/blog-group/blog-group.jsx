import { Box, Button, SimpleGrid, Image } from "@chakra-ui/react";
import Child from "../age-content/child";
import Card from "../card/card";
// import Card from "../card/card-no-image";

const BlogGroup = () => {
  return (
    <SimpleGrid columns={4} spacing={10} m="150">
      <Card
        title="title"
        desc="desc"
        image="https://images.unsplash.com/photo-1541617219835-3689726fa8e7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8bmF0dXJlfHx8fHx8MTY0NDE1MDc2OA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920"
      />
      <Card
        title="title"
        desc="desc"
        image="https://images.unsplash.com/photo-1541617219835-3689726fa8e7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8bmF0dXJlfHx8fHx8MTY0NDE1MDc2OA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920"
      />
      <Card
        title="title"
        desc="desc"
        image="https://images.unsplash.com/photo-1541617219835-3689726fa8e7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8bmF0dXJlfHx8fHx8MTY0NDE1MDc2OA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920"
      />
      <Card
        title="title"
        desc="desc"
        image="https://images.unsplash.com/photo-1541617219835-3689726fa8e7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8bmF0dXJlfHx8fHx8MTY0NDE1MDc2OA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920"
      />
    </SimpleGrid>
  );
};

export default BlogGroup;
