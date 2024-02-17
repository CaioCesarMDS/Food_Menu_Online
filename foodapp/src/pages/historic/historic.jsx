import Navbar from "../../components/navbar/navbar.jsx";
import { useEffect, useState } from "react";
import api from "../../services/api.js";
import "./historic.css";

function Historic() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        api.get("/pedidos")
            .then((resp) => {
                setOrders(resp.data);
            })
            .catch((err) => {
                alert(`Erro ao carregar pedidos: ${err}`);
            });
    }, []);

    return (
        <div>
            <Navbar showMenu={true} />
            <div className="container">
                <div className="text-center">
                    <h1 className="title">Histórico de Pedidos</h1>
                </div>
                <div className="order-box">
                    <table className="table">
                        <tbody>
                            {orders.map((order) => {
                                return (
                                    <tr key={order.id_order}>
                                        <td>
                                            <strong>Pedido {order.id_order}</strong>
                                        </td>
                                        <td className="text-light">{order.dt_order}</td>
                                        <td className="text-red">
                                            {new Intl.NumberFormat("pt-BR", {
                                                style: "currency",
                                                currency: "BRL",
                                            }).format(order.total)}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Historic;
