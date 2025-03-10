import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

import "./connections/connection.js";
import user from "./routes/user.js";

app.use(express.json());
app.use("/api/v1", user);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});