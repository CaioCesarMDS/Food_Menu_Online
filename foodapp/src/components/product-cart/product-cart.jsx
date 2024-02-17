import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context.js";
import "./product-cart.css";

function ProductCart(props) {
    const { addProductCart, removeProductCart } = useContext(CartContext);

    function addProduct() {
        const product = {
            id: props.id,
            name: props.name,
            price: props.price,
            foto: props.foto,
            quantity: 1,
        };

        addProductCart(product);
    }

    function removeProduct() {
        removeProductCart(props.id);
    }

    return (
        <div className="product-cart-box">
            <div>
                <picture>
                    <img src={props.foto} alt="img-food" />
                </picture>
            </div>
            <div className="product-cart-description">
                <h4>{props.name}</h4>
                <p className="product-cart-price">
                    {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                    }).format(props.price)}
                </p>
                <div className="purchase-requests">
                    <div className="orders">
                        <button onClick={removeProduct}>-</button>
                        <span>{props.quantity}</span>
                        <button onClick={addProduct}>+</button>
                    </div>
                    <p className="total-price text-right">
                        {new Intl.NumberFormat("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                        }).format(props.price * props.quantity)}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProductCart;
