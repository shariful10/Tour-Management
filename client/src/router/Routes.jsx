import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/Layout/Layout";
import TourDetails from "../pages/TourDetails";
import SearchResultList from "../pages/SearchResultList";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Tours from './../pages/Tours';

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
         {
            path: "/tours",
            element: <Tours />,
         },
         {
            path: "/tours/:id",
            element: <TourDetails />,
         },
         {
            path: "/tours/search",
            element: <SearchResultList />,
         },
         {
            path: "/login",
            element: <Login />,
         },
         {
            path: "/register",
            element: <Register />,
         },
      ]
	},
]);
