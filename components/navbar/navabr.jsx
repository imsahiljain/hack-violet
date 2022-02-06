import { Flex, Spacer, Box, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import Donate from "../donate/donate";
// import styles from "./link.module.css";
const Navbar = () => {
  return (
    <>
      <Flex zIndex="100" pos="absolute" w="100%" flexWrap="wrap">
        <Box p="2" m="3">
          <Heading
            className="newsHeading"
            fontFamily="Ageo-Heavy"
            fontSize="3xl"
            ml="5"
            color="gray.200"
          >
            Heading
          </Heading>
        </Box>
        <Spacer />
        <Box m="5" display="flex">
          <Link href="/" passHref>
            <Text
              cursor="pointer"
              // colorScheme="black"
              // variant="ghost"
              mt="2"
              mr="7"
              fontFamily="Ageo-Medium"
              fontSize="18px"
            >
              Home
            </Text>
          </Link>
          <Link href="/medicine" passHref>
            <Text
              cursor="pointer"
              // colorScheme="black"
              // variant="ghost"
              mt="2"
              mr="7"
              fontFamily="Ageo-Medium"
              fontSize="18px"
            >
              Medicine
            </Text>
          </Link>
          <Link href="/age" passHref>
            <Text
              cursor="pointer"
              // colorScheme="black"
              // variant="ghost"
              mt="2"
              mr="7"
              fontFamily="Ageo-Medium"
              fontSize="18px"
            >
              Age
            </Text>
          </Link>
          <Link href="/pregnancy" passHref>
            <Text
              cursor="pointer"
              // colorScheme="black"
              // variant="ghost"
              mt="2"
              mr="7"
              fontFamily="Ageo-Medium"
              fontSize="18px"
            >
              Pregnancy
            </Text>
          </Link>

          <Link href="/blog" passHref>
            <Text
              cursor="pointer"
              // colorScheme="black"
              // variant="ghost"
              mt="2"
              mr="7"
              fontFamily="Ageo-Medium"
              fontSize="18px"
            >
              Blog
            </Text>
          </Link>

          <Link href="/chat" passHref>
            <Text
              cursor="pointer"
              // colorScheme="black"
              // variant="ghost"
              mt="2"
              mr="7"
              fontFamily="Ageo-Medium"
              fontSize="18px"
            >
              Chat
            </Text>
          </Link>

          <Donate />
        </Box>
      </Flex>
    </>
  );
};

export default Navbar;
