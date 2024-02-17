import React from "react";
import ReactDOM from "react-dom/client";
import RouteS from "./routes.js";
import { CartProvider } from "./contexts/cart-context.js";
import "./style/global.css";
import 'react-toastify/dist/ReactToastify.min.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <CartProvider>
        <RouteS />
    </CartProvider>
);
