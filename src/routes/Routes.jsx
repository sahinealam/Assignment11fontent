import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../Pages/Home/Home";
import { logicalMinimum } from "firebase/firestore/pipelines";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path:"/login",
        Component:Login
      },
      {
        path:"/signup",
        Component:SignUp
      }
    ],
  },
]);

export default router;
