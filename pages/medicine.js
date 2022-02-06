import { Center, Heading, Text } from "@chakra-ui/react";
import Navbar from "../components/navbar/navbar";
import Head from "next/head";
import Title from "../components/title/title";

const Chat = () => {
  return (
    <>
      <Head>
        <title>Womenify | Medicine</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <Navbar />
      <Title title="Identify your medicine" />
      <Center>
        <Text
          mt="6"
          fontFamily="Ageo-Medium"
          color="gray.400"
          w="30%"
          textAlign="center"
          fontSize="lg"
        >
          Just two steps to be in safe hands before using any medicine. <br />
          - Take a medicine you would like to get information about. <br />-
          Scan the product clearly to get best results. Thats it, there you go.
        </Text>
      </Center>
    </>
  );
};

export default Chat;
