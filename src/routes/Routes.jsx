import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import DashboardLayout from "../DashboardLayout/DashboardLayout";
import ErrorPage from "../Pages/ErrorPage";
import AddRequest from "../Pages/Dashboard/AddRequest/AddRequest";
import MainDashboard from "../Pages/MainDashboard/MainDashboard";
import AllUsers from "../Pages/AllUsers/AllUsers";
import PrivetRout from "./PrivetRout";
import MyRequest from "../Pages/MyRequest/MyRequest";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <PrivetRout><DashboardLayout /></PrivetRout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: <MainDashboard/>
      },
      {
        path:"add-request",
        element:<AddRequest/>
      },
        {
        path:"all-users",
        element:<AllUsers/>
      },
       {
        path:"my-request",
        element:<MyRequest></MyRequest>
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
