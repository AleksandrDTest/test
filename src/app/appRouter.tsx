import { createBrowserRouter } from "react-router-dom";
import { PATH } from "../shared/router/path";
import Layout from "./layout/Layout";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: PATH.root,
        element: <Home />,
      },
    ],
  },
]);
