import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/home/Home"
import { Login } from "./pages/login/Login"
import { Register } from "./pages/register/Register"
export const App: React.FC = () => {
  return (
    <ChakraProvider>
       <div>
         <BrowserRouter>
         <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/signup' element={<Register/>}/>
           <Route path='/login' element={<Login/>}/>
           <Route path='*' element={<Home/>} />
         </Routes>
         </BrowserRouter>
       </div>
    </ChakraProvider>
  )
}
