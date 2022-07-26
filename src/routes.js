import { Navigate } from "react-router-dom";
import Products from "./pages/products";
import CartState from "./context/cart/CartState";

const routes = [
  {
    path: "/products",
    element: (
      <CartState>
        <Products />
      </CartState>
    ),
  },
  {
    path: "*",
    element: <Navigate to="/404" />,
  },
];

export default routes;
