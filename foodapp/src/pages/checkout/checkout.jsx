import Navbar from "../../components/navbar/navbar.jsx";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/cart-context.js";
import "./checkout.css";
import api from "../../services/api.js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Checkout() {
    const { totalCart, cartItems, setCartItems, setTotalCart } = useContext(CartContext);

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [state, setState] = useState("");
    const [cep, setCep] = useState("");
    const [address, setAddress] = useState("");
    const [allowOrder, setAllowOrder] = useState(false);

    function finalizeOrder() {
        let products = [];

        for (let prod of cartItems) {
            products.push({
                id_product: prod.id,
                quantity: prod.quantity,
                price: prod.price,
                total_price: prod.price * prod.quantity,
            });
        }

        const params = {
            id_user: 1,
            name,
            email,
            phone,
            state,
            cep,
            address,
            total: totalCart,
            itens: products,
        };

        localStorage.setItem("sessionUser", JSON.stringify(params));

        api.post("/pedidos", params)
            .then((resp) => {
                setCartItems([]);
                setTotalCart(0);
                navigate("/historic");
            })
            .catch((err) => {
                alert(`Erro ao enviar pedido: ${err}`);
            });

        toast.success("Pedido realizado com sucesso");
    }

    useEffect(() => {
        if (localStorage.getItem("sessionUser")) {
            let session = JSON.parse(localStorage.getItem("sessionUser"));
            setName(session.name);
            setEmail(session.email);
            setPhone(session.phone);
            setState(session.state);
            setCep(session.cep);
            setAddress(session.address);
        }
    }, []);

    useEffect(() => {
        if (name && email && phone && state && cep && address && cartItems.length > 0) {
            setAllowOrder(true);
        } else {
            setAllowOrder(false);
        }
    }, [name, email, phone, state, cep, address, cartItems]);

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="text-center">
                    <h1 className="title">Finalizar Pedido</h1>
                </div>
                <div className="container-informations">
                    <div className="box-checkout">
                        <h3>Dados Pessoais</h3>
                        <div className="input-group">
                            <label htmlFor="name">Nome completo</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="email">E-mail</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="phone">Telefone contato</label>
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="box-checkout">
                        <h3>Endereço entrega</h3>
                        <div className="input-group">
                            <p>UF</p>
                            <select
                                id="state"
                                name="state"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                            >
                                <option value="AC">Acre</option>
                                <option value="AL">Alagoas</option>
                                <option value="AP">Amapá</option>
                                <option value="AM">Amazonas</option>
                                <option value="BA">Bahia</option>
                                <option value="CE">Ceará</option>
                                <option value="DF">Distrito Federal</option>
                                <option value="ES">Espírito Santo</option>
                                <option value="GO">Goiás</option>
                                <option value="MA">Maranhão</option>
                                <option value="MT">Mato Grosso</option>
                                <option value="MS">Mato Grosso do Sul</option>
                                <option value="MG">Minas Gerais</option>
                                <option value="PA">Pará</option>
                                <option value="PB">Paraíba</option>
                                <option value="PR">Paraná</option>
                                <option value="PE">Pernambuco</option>
                                <option value="PI">Piauí</option>
                                <option value="RJ">Rio de Janeiro</option>
                                <option value="RN">Rio Grande do Norte</option>
                                <option value="RS">Rio Grande do Sul</option>
                                <option value="RO">Rondônia</option>
                                <option value="RR">Roraima</option>
                                <option value="SC">Santa Catarina</option>
                                <option value="SP">São Paulo</option>
                                <option value="SE">Sergipe</option>
                                <option value="TO">Tocantins</option>
                                <option value="EX">Estrangeiro</option>
                            </select>
                        </div>
                        <div className="input-group">
                            <label htmlFor="cep">CEP</label>
                            <input
                                type="text"
                                name="cep"
                                id="cep"
                                value={cep}
                                onChange={(e) => setCep(e.target.value)}
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="address">Endereço</label>
                            <input
                                type="text"
                                name="address"
                                id="address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="box-checkout">
                        <h3>Valores</h3>
                        <div className="checkout-values">
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
                        <div className="checkout-button">
                            {allowOrder ? (
                                <button className="btn-checkout" onClick={finalizeOrder}>
                                    Finalizar Pedido
                                </button>
                            ) : (
                                <button
                                    className="btn-checkout"
                                    disabled
                                    onClick={finalizeOrder}
                                >
                                    Finalizar Pedido
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;
