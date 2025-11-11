import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllMovies from "../Pages/AllMovies";
import MyCollection from "../Pages/MyCollection";
import PrivateRoutes from "../Private/PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/movies",
        Component: AllMovies,
      },
      {
        path: "/collection",
        element: <PrivateRoutes><MyCollection></MyCollection></PrivateRoutes>
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
]);
