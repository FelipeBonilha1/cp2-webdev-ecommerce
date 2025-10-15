import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Perfil from "../pages/Perfil";
import Carrinho from "../pages/Carrinho";
import Layout from "../Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "perfil", element: <Perfil /> },
      { path: "carrinho", element: <Carrinho /> }
    ],
  },
]);

export default router;