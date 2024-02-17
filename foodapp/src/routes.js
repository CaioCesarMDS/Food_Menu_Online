import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home.jsx";
import Checkout from "./pages/checkout/checkout.jsx";
import Historic from "./pages/historic/historic.jsx";
import { ToastContainer } from "react-toastify";

function RouteS() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/historic" element={<Historic />} />
            </Routes>
            <ToastContainer>
            </ToastContainer>
        </BrowserRouter>
    );
}

export default RouteS;
