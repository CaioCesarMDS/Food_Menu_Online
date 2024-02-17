import express from "express";
import cors from "cors";
import productRoute from "./routes/product-route.js";
import orderRoute from "./routes/order-route.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use(productRoute);
app.use(orderRoute);

app.listen(3001, () => {
    console.log("Executando na porta 3001");
});
