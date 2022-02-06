import { Heading } from "@chakra-ui/react";

export default function Title({ title }) {
  return (
    <Heading
      pt="200px"
      fontSize={{ base: "3xl", md: "4xl", lg: "7xl" }}
      fontFamily="Ageo-Heavy"
      letterSpacing="-3px"
      lineHeight=".9"
      color="gray.200"
      textAlign="center"
    >
      {title}
    </Heading>
  );
}
