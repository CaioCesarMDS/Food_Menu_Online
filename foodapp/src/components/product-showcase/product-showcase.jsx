import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context.js";
import "./product-showcase.css";

function ProductShowcase(props) {
    const { addProductCart } = useContext(CartContext);

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

    return (
        <div className="product-showcase-box text-center">
            <div>
                <picture>
                    <img src={props.foto} alt="img-food" />
                </picture>
            </div>
            <div>
                <h2>{props.name}</h2>
                <p className="product-showcase-description">{props.description}</p>
                <p className="product-showcase-price">
                    {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                    }).format(props.price)}
                </p>
            </div>
            <div>
                <button className="btn-cart" onClick={addProduct}>
                    <FontAwesomeIcon className="icon icon-black" icon={faBagShopping} />
                    adicionar
                </button>
            </div>
        </div>
    );
}

export default ProductShowcase;
