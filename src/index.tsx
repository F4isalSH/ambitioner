import * as React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import ReactDOM from "react-dom"
import { App } from "./App"
import {AuthContextProvider} from './context/AuthContext'

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ChakraProvider>
      <App />
      </ChakraProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root"),
)
