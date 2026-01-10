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
import WatchList from "../Pages/WatchList";
import AboutUs from "../Pages/AboutUs";
import DashboardLayout from "../Layout/DashboardLayout";

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
        path: "/about",
        Component: AboutUs,
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
        path: "/movies/details/update/:id",
        element: (
          <PrivateRoutes>
            <Update></Update>
          </PrivateRoutes>
        ),
      },
      {
        path: "/watchlist",
        element: (
          <PrivateRoutes>
            <WatchList></WatchList>
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
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout></DashboardLayout>
      </PrivateRoutes>
    ),
  },
]);
