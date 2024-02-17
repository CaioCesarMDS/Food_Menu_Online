import { createContext, useState } from "react";

const CartContext = createContext();

function CartProvider(props) {
    const [cartItems, setCartItems] = useState([]);
    const [totalCart, setTotalCart] = useState(0);

    function addProductCart(product) {
        let newCartItems = [];
        let findItem = false;

        for (let prod of cartItems) {
            if (prod.id === product.id) {
                product.quantity = prod.quantity + 1;
                findItem = true;
                newCartItems.push(product);
            } else {
                newCartItems.push(prod);
            }
        }

        if (findItem === false || cartItems.length === 0) {
            newCartItems.push(product);
        }

        setCartItems(newCartItems);
        calcTotalPrice(newCartItems);
    }

    function removeProductCart(id) {
        let newCartItems = [];

        for (let prod of cartItems) {
            if (prod.id === id) {
                prod.quantity = prod.quantity - 1;
            }

            newCartItems.push(prod);
        }

        newCartItems = newCartItems.filter((product) => {
            return product.quantity > 0;
        });

        setCartItems(newCartItems);
        calcTotalPrice(newCartItems);
    }

    function calcTotalPrice(products) {
        let total = 0;

        for (let product of products) {
            total = total + product.price * product.quantity;
        }
        setTotalCart(total);
    }

    return (
        <CartContext.Provider
            value={{
                cartItems,
                setCartItems,
                addProductCart,
                removeProductCart,
                totalCart,
                setTotalCart,
            }}
        >
            {props.children}
        </CartContext.Provider>
    );
}

export { CartContext, CartProvider };
