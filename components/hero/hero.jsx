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
          <Stack spacing="6" w="full" maxW="2xl" mb="20" ml="14">
            <Heading
              fontSize={{ base: "3xl", md: "6xl" }}
              fontFamily="FUNGIS-Heavy"
              letterSpacing="-3px"
              lineHeight=".9"
              color="gray.200"
            >
              We are <br />
              always here
              <br />
              for you
            </Heading>
            <Text
              fontSize={{ base: "md", lg: "lg" }}
              color="gray.400"
              fontFamily="Ageo-SemiBold"
            >
              In this world, there are so many websites for fashion, beauty,
              health care and much more. But, there is no proper website for
              womens. Our project will help tons of women to encourage, improve
              and explore. We believe that every women should be independent in
              their beautiful life.
            </Text>
            {/* <Stack direction={{ base: "column", md: "row" }} spacing="4">
              <Button
                colorScheme="blue.800"
                variant="outline"
                fontFamily="Ageo-SemiBold"
                fontSize="18px"
              >
                Click here
              </Button>
            </Stack> */}
          </Stack>
        </Flex>
        <Flex>
          <Image
            height="100vh"
            width="950px"
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
