import express from 'express';
import User from '../models/user.js';
import authenticationToken from './userAuth.js';


const router = express.Router();

router.put("/add-favourite",authenticationToken, async (req, res) => {
    try {
        const {bookid,id}=req.headers;
        const userData=await User.findById(id);
        if(userData.favourites.includes(bookid)){
            return res.status(400).json({message: "Book already in favourites"});
        }
        await User.findByIdAndUpdate(id,{$push:{favourites:bookid}});
        return res.status(200).json({ message: "Book added to favourites successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error in add-favourite" });
    }
});

router.delete("/remove-favourite",authenticationToken, async (req, res) => {
    try {
        const {bookid,id}=req.headers;
        const userData=await User.findById(id);
        if(!userData.favourites.includes(bookid)){
            return res.status(400).json({message: "Book not in favourites"});
        }
        await User.findByIdAndUpdate(id,{$pull:{favourites:bookid}});
        return res.status(200).json({ message: "Book removed from favourites successfully" });
    }catch (error) {
        return res.status(500).json({ message: "Internal server error in remove-favourite" });
    }  
});

router.get("/get-favourites",authenticationToken, async (req, res) => {
    try {
        const {id}=req.headers;
        const userData=await User.findById(id).populate("favourites");
        const favouriteBooks=userData.favourites;
        return res.status(200).json({
            data: favouriteBooks,
        });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error in get-favourites" });
    }
});

export default router;