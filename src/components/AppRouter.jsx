import { Routes, Route, Navigate } from "react-router-dom";
import { publicRoutes, privateRoutes } from "../router";
import { useContext } from "react";
import { AuthContext } from "../context";

const AppRouter = () => {
  const { isAuth } = useContext(AuthContext);

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
      <Route path="/*" element={<Navigate to="/posts" replace />}></Route>
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
      <Route path="/*" element={<Navigate to="/login" replace />}></Route>
    </Routes>
  );
};

export default AppRouter;
