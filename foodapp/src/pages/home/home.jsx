import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar.jsx";
import ProductShowcase from "../../components/product-showcase/product-showcase.jsx";
import api from "../../services/api.js";

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        api.get("/produtos")
            .then((resp) => {
                setProducts(resp.data);
            })
            .catch((err) => {
                alert(`Erro ao carregar produtos: ${err}`);
            });
    }, []);

    return (
        <div>
            <Navbar showMenu={true} />
            <div className="container">
                <div className="text-center">
                    <h1 className="title">Nosso Cardápio</h1>
                    <p className="subtitle">
                        Clique em adicionar para colocar os produtos na sacola de compras.
                        Se preferir, você pode pedir pelo WhatsApp: (81) 4002-8922
                    </p>
                </div>
            </div>
            <div className="products">
                {products.map((product) => {
                    return (
                        <ProductShowcase
                            key={product.id_product}
                            id={product.id_product}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            foto={product.foto}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Home;
