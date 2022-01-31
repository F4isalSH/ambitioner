import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
import { useAuthContext } from "./hooks/useAuthContext";
export const App: React.FC = () => {
  const { authIsReady } = useAuthContext();
  return (
    <div>
      {authIsReady && (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
};
