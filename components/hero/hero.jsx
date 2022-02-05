import { Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <Stack
        minH="100vh"
        direction={{ base: "column", md: "row" }}
        pt={{ base: "150", md: "4xl", lg: "20" }}
      >
        <Flex pb="8" flex="1" align="center" justify="center">
          <Stack spacing="6" w="full" maxW="2xl" mb="20">
            <Heading
              fontSize={{ base: "3xl", md: "4xl", lg: "8xl" }}
              fontFamily="FUNGIS-Heavy"
              letterSpacing="-3px"
              lineHeight=".9"
              color="gray.200"
            >
              Some Heading <br />
              goes here
            </Heading>
            <Text
              fontSize={{ base: "md", lg: "lg" }}
              color="gray.400"
              fontFamily="Ageo-SemiBold"
            >
              We Never Settle. We are always enhancing the quality of our
              garments in order to provide you with the greatest look possible
              at all times and in all places.
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing="4">
              <Button
                colorScheme="blue.800"
                variant="outline"
                fontFamily="Ageo-SemiBold"
                fontSize="18px"
              >
                Click here
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex>
          <Image
            height="100vh"
            width="900px"
            alt={"Hero image"}
            src="/images/hero.svg"
            draggable="false"
            mr="10"
          />
        </Flex>
      </Stack>
    </>
  );
}
