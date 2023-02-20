import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { AuthContextProvider } from "./context/authContext";

import { Router } from "./router";


function App() {


  return (
    <BrowserRouter>
      <AuthContextProvider>
        <ChakraProvider>
          <Layout>
            < Router />
          </Layout>
        </ChakraProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );

}

export default App
