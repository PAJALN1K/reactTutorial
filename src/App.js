import { BrowserRouter } from "react-router-dom";
import "./styles/App.css";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/UI/navbar/Navbar";
import { AuthContext } from "./context";
import { useEffect, useState } from "react";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
      }}
    >
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;

// Browseer router отслеживает изменение пути и перерисовывает компоненты
