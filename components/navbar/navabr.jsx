import { Flex, Spacer, Box, Heading, Button, Link } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <>
      <Flex zIndex="100" boxShadow="xs" pos="absolute" w="100%" flexWrap="wrap">
        <Box p="2" m="3">
          <Heading
            className="newsHeading"
            fontFamily="Ageo-Heavy"
            fontSize="3xl"
          >
            Heading
          </Heading>
        </Box>
        <Spacer />
        <Box m="5">
          <Link
            to="/"
            colorScheme="black"
            variant="ghost"
            mt="2"
            mr="7"
            fontFamily="Ageo-Medium"
            fontSize="18px"
          >
            Home
          </Link>
          <Link
            to="/"
            colorScheme="black"
            variant="ghost"
            mt="2"
            mr="7"
            fontFamily="Ageo-Medium"
            fontSize="18px"
          >
            Medicine
          </Link>
          <Link
            to="/"
            colorScheme="black"
            variant="ghost"
            mt="2"
            mr="7"
            fontFamily="Ageo-Medium"
            fontSize="18px"
          >
            Age
          </Link>
          <Link
            to="/"
            colorScheme="black"
            variant="ghost"
            mt="2"
            mr="7"
            fontFamily="Ageo-Medium"
            fontSize="18px"
          >
            Pregnancy
          </Link>

          <Link
            to="/"
            colorScheme="black"
            variant="ghost"
            mt="2"
            mr="7"
            fontFamily="Ageo-Medium"
            fontSize="18px"
          >
            Blog
          </Link>

          <Button
            colorScheme="pink"
            p="5"
            variant="solid"
            mr="30"
            fontSize="18px"
          >
            Donate
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default Navbar;
