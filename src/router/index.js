import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import Login from "../pages/Login";

export const privateRoutes = [
  { path: "/about", element: <About /> },
  { path: "/posts", element: <Posts /> },
  { path: "/posts/:post_with_id", element: <PostIdPage /> },
  { path: "/error", element: <Error /> },
];

export const publicRoutes = [
  { path: "/login", element: <Login /> },
  { path: "/about", element: <About /> },
  { path: "/error", element: <Error /> },
];
