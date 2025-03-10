import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const authenticationToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.status(401).json({ message: "Authentication token required" });

    jwt.verify(token, `${process.env.JWT_SECRET_KEY}`, (err, user) => {
        if (err) {
            return res.status(403).json({ message: "Invalid token .Plz sign-in again" });
        }
        req.user = user;
        next();
    });
};

export default authenticationToken;