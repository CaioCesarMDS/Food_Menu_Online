import { Router } from "express";
import { db, query } from "../config/database.js";

const orderRoute = Router();

orderRoute.get("/pedidos", function (req, res) {
    db.all(
        `select id_order, total, name, email, strftime('%d/%m/%Y', dt_order) as dt_order from orderr`,
        [],
        function (err, rows) {
            if (err) {
                return res.status(500).send("Ocorreu um erro: " + err.message);
            } else {
                return res.status(200).json(rows);
            }
        }
    );
});

orderRoute.post("/pedidos", (req, res) => {
    let sql =
        "insert into orderr(id_user, name, email, phone, state, cep, address, total, dt_order) values(?, ?, ?, ?, ?, ?, ?, ?, current_date) returning id_order";

    let params = req.body;

    db.all(
        sql,
        [
            params.id_user,
            params.name,
            params.email,
            params.phone,
            params.state,
            params.cep,
            params.address,
            params.total,
        ],
        async (err, rows) => {
            if (err) {
                return res.status(500).send(`Erro ao salvar pedido: ${err.message}`);
            } else {
                let id_ord = rows[0].id_order;

                for (let product of req.body.itens) {
                    sql =
                        "insert into order_item(id_order, id_product, quantity, price, total_price) values ( ?, ?, ?, ?, ?)";

                    await query(sql, [
                        id_ord,
                        product.id_product,
                        product.quantity,
                        product.price,
                        product.total_price,
                    ]);
                }

                return res.status(201).json({ id_order: id_ord });
            }
        }
    );
});

export default orderRoute;
