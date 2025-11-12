import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllMovies from "../Pages/AllMovies";
import MyCollection from "../Pages/MyCollection";
import PrivateRoutes from "../Private/PrivateRoutes";
import MovieDetails from "../Pages/MovieDetails";
import ErrorPage from "../Pages/ErrorPage";
import Update from "../Pages/Update";
import AddMovies from "../Pages/AddMovies";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
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
        element: (
          <PrivateRoutes>
            <MyCollection></MyCollection>
          </PrivateRoutes>
        ),
      },
      {
        path: "/movies/details/:id",
        Component: MovieDetails,
      },
      {
        path: "/movies/add",
        element: (
          <PrivateRoutes>
            <AddMovies></AddMovies>
          </PrivateRoutes>
        ),
      },
      {
        path: "/movies/details/update",
        element: (
          <PrivateRoutes>
            <Update></Update>
          </PrivateRoutes>
        ),
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
