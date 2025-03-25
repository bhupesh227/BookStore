import express from 'express';
import Order from '../models/order.js';
import authenticationToken from './userAuth.js';
import User from '../models/user.js';

const router = express.Router();

router.post("/place-order", authenticationToken, async (req, res) => {
    try {
        const {id}=req.headers;
        const {order} = req.body;
        for (const orderData of order) {
            const newOrder = new Order({
                user: id,
                book: orderData._id,
            });
            const orderDataDromDb = await newOrder.save();
            await User.findByIdAndUpdate(id, { $push: { orders: orderDataDromDb._id } });
            await User.findByIdAndUpdate(id, { $pull: { cart: orderData._id } });
        }
        return res.status(200).json({ message: "Order placed successfully"});
    } catch (error) {
        return res.status(500).json({ message: "Internal server error in place-order" });
    }
});

router.get("/order-history", authenticationToken, async (req, res) => {
    try {
        const {id}=req.headers;
        const userData = await User.findById(id).populate({path: "orders", populate: {path: "book"}});
        const ordersData = userData.orders.reverse();
        return res.status(200).json({
            data: ordersData,
        });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error in order-history" });
    }
});

router.get("/all-orders", authenticationToken, async (req, res) => {
    try {
        const {id}=req.headers;
        const user=await User.findById(id);
        if(user.role !== "admin"){
            return res.status(403).json({message: "You are not authorized for this role"});
        }
        const ordersData = await Order.find().populate("book").populate("user").sort({createdAt: -1});
        return res.status(200).json({
            data: ordersData,
        });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error in all-orders" });
    }
});

router.put("/update-status/:ids",authenticationToken, async (req, res) => {
    try {
        const {id}=req.headers;
        const user=await User.findById(id);
        if(user.role !== "admin"){
            return res.status(403).json({message: "You are not authorized for this role"});
        }
        const {ids} = req.params;
        await Order.findByIdAndUpdate(ids, {status: req.body.status});
        return res.status(200).json({ message: "Order updated successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error in update-order" });
    }
});



export default router;