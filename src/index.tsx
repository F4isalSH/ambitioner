import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";

ReactDOM.render(
  <React.StrictMode>
    <Toaster />
    <ChakraProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
