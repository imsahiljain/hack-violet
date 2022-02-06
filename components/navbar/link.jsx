import Link from "next/link";
import { Text } from "@chakra-ui/react";

const NavLink = ({ url, linkName }) => {
  return (
    <Link href={`/${url}`} passHref>
      <Text
        cursor="pointer"
        mt="2"
        mr="7"
        fontFamily="Ageo-Medium"
        fontSize="18px"
      >
        {linkName}
      </Text>
    </Link>
  );
};

export default NavLink;
