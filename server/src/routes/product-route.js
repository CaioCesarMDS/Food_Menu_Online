import { Router } from "express";
import { db } from "../config/database.js";

const productRoute = Router();

productRoute.get("/produtos", (req, res) => {
    db.all("select * from product", [], (err, rows) => {
        if (err) {
            return res.status(500).send(`Ocorreu um erro: ${err.message}`);
        } else {
            return res.status(200).json(rows);
        }
    });
});

export default productRoute;