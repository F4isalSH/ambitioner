import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
import { useAuthContext } from "./hooks/useAuthContext";

export const App: React.FC = () => {
  const { user, authIsReady } = useAuthContext();
  return (
    <div>
      {authIsReady && (
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/register"
              element={user ? <Navigate to="/" /> : <Register />}
            />
            <Route
              path="/login"
              element={user ? <Navigate to="/" /> : <Login />}
            />
            <Route
              path="*"
              element={user ? <Navigate to="/" /> : <Navigate to="/login" />}
            />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
};
