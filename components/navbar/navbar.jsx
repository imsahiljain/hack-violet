import { Flex, Spacer, Box, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import Donate from "../donate/donate";
import NavLink from "./link";

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
          <NavLink url="" linkName="Home" />
          <NavLink url="medicine" linkName="Medicine" />
          <NavLink url="age" linkName="Age" />
          <NavLink url="pregnancy" linkName="Pregnancy" />
          <NavLink url="blog" linkName="Blog" />
          <NavLink url="chat" linkName="Chat" />
          <Donate />
        </Box>
      </Flex>
    </>
  );
};

export default Navbar;
