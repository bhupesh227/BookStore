import express from 'express';
import User from '../models/user.js';
import authenticationToken from './userAuth.js';


const router = express.Router();

router.put("/add-to-cart",authenticationToken, async (req, res) => {
    try {
        const {bookid,id}=req.headers;
        const userData=await User.findById(id);
        if(userData.cart.includes(bookid)){
            return res.status(400).json({message: "Book already in cart"});
        }
        await User.findByIdAndUpdate(id,{$push:{cart:bookid}});
        return res.status(200).json({ message: "Book added to cart successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error in add-to-cart" });
    }
});

router.put("/remove-from-cart/:bookid",authenticationToken, async (req, res) => {
    try {
        const {id}=req.headers;
        const {bookid}=req.params;
        const userData=await User.findById(id);
        if(!userData.cart.includes(bookid)){
            return res.status(400).json({message: "Book not in cart"});
        }
        await User.findByIdAndUpdate(id,{$pull:{cart:bookid}});
        return res.status(200).json({ message: "Book removed from cart successfully" });
    }catch (error) {
        return res.status(500).json({ message: "Internal server error in remove-from-cart" });
    }  
});

router.get("/get-cart",authenticationToken, async (req, res) => {
    try {
        const {id}=req.headers;
        const userData=await User.findById(id).populate("cart");
        const cartBooks=userData.cart.reverse();
        return res.status(200).json({
            data: cartBooks,
        });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error in get-cart" });
    }
});


export default router;