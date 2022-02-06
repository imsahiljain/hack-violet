import { Heading } from "@chakra-ui/react";
import Navbar from "../components/navbar/navbar";
import Head from "next/head";
import Title from "../components/title/title";
import BlogGroup from "../components/blog-group/blog-group";
import { Center, Text } from "@chakra-ui/react";

const Blog = () => {
  return (
    <>
      <Head>
        <title>Blog | Womenify</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <Navbar />
      <Title title="Blogs" />
      <Center>
        <Text
          mt="6"
          fontFamily="Ageo-Medium"
          color="gray.400"
          w="30%"
          textAlign="center"
          fontSize="lg"
        >
          Share and view blogs and tips related to health, parenting and more.
        </Text>
      </Center>
      <BlogGroup />
    </>
  );
};

export default Blog;
