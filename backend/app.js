import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

import "./connections/connection.js";
import User from "./routes/user.js";
import Books from "./routes/book.js";
import Favourite from "./routes/favourite.js";
import Cart from "./routes/cart.js";
import Order from "./routes/order.js";

app.use(express.json());
app.use("/api/v1", User);
app.use("/api/v1", Books);
app.use("/api/v1", Favourite);
app.use("/api/v1", Cart);
app.use("/api/v1", Order);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});