import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

import "./connections/connection.js";


app.get('/', (req, res) => {
    res.send('Hello World!');
});




app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});