import { createBrowserRouter } from "react-router";

import MainLayout from "../Components/MainLayout";
import About from "../pages/About";
import Home from "../pages/Home";
import AddCart from "../pages/AddCart";
import ProductDetail from "../pages/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/addCart",
        element: <AddCart />,
      },
      {
        path: "/productDetail/:productId",
        element: <ProductDetail/>,
      },
    ],
  },
]);

export default router;
