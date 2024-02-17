import { Dock } from "react-dock";
import { useEffect, useState, useContext } from "react";
import ProductCart from "../product-cart/product-cart.jsx";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart-context.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import "./cart.css";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

function Cart() {
    const [show, setShow] = useState(false);
    const { cartItems, totalCart } = useContext(CartContext);
    const navigate = useNavigate();

    useEffect(() => {
        window.addEventListener("openSideBar", () => {
            setShow(true);
        });
    }, []);

    function goToCheckoutPage() {
        navigate("/checkout");
    }

    return (
        <Dock
            position="right"
            isVisible={show}
            fluid={false}
            size={370}
            onVisibleChange={(visible) => {
                setShow(visible);
            }}
        >
            {cartItems.length === 0 ? (
                <div className="cart-empty">
                    <FontAwesomeIcon
                        className="icon-black btn-cart-close"
                        icon={faCircleXmark}
                        onClick={() => {
                            setShow(false);
                        }}
                    />
                    <FontAwesomeIcon
                        className="icon-red "
                        icon={faBagShopping}
                        onClick={() => {
                            setShow(false);
                        }}
                    />
                    <p>Sua sacola está vazia</p>
                </div>
            ) : (
                <>
                    <div>
                        <div className="cart-title">
                            <FontAwesomeIcon
                                className="icon-black btn-cart-close"
                                icon={faCircleXmark}
                                onClick={() => {
                                    setShow(false);
                                }}
                            />
                            <h1 className="text-center">Meu pedido</h1>
                        </div>
                        <div className="product-list">
                            {cartItems.map((product) => {
                                return (
                                    <ProductCart
                                        key={product.id}
                                        id={product.id}
                                        name={product.name}
                                        price={product.price}
                                        foto={product.foto}
                                        quantity={product.quantity}
                                    />
                                );
                            })}
                        </div>
                        <div className="cart-summary">
                            <div className="cart-total-price">
                                <span>Total</span>
                                <span>
                                    <strong>
                                        {new Intl.NumberFormat("pt-BR", {
                                            style: "currency",
                                            currency: "BRL",
                                        }).format(totalCart)}
                                    </strong>
                                </span>
                            </div>
                            <div>
                                <button
                                    className="btn-checkout"
                                    onClick={goToCheckoutPage}
                                >
                                    <p className="text">Finalizar Pedido</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </Dock>
    );
}

export default Cart;
