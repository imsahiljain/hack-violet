import { ChakraProvider } from "@chakra-ui/react";
import Home from "./index";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Home>
        <Component {...pageProps} />
      </Home>
    </ChakraProvider>
  );
}

export default MyApp;
