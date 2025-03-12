// admin 
import express from 'express';
import User from '../models/user.js';
import jwt from 'jsonwebtoken';
import authenticationToken from './userAuth.js';
import Book from '../models/book.js';

const router = express.Router();

router.post("/add-book",authenticationToken, async (req, res) => {
    try {
        const {id}=req.headers;
        const user=await User.findById(id);
        if(user.role !== "admin"){
            return res.status(403).json({message: "You are not authorized to add a book"});
        }
       /* if(!req.body.url || !req.body.title || !req.body.author || !req.body.price || !req.body.desc || !req.body.language){
            return res.status(400).json({message: "All fields are mandatory"});
        }*/
        const book= new Book({
            url: req.body.url,
            title: req.body.title,
            author: req.body.author,
            price: req.body.price,
            desc: req.body.desc,
            language: req.body.language,
        });
        await book.save();
        res.status(200).json({ message: "Book added successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error in add-book" });
    }
});

router.put("/update-book",authenticationToken, async (req, res) => {
    try {
        const {bookid} = req.headers;
        await Book.findByIdAndUpdate(bookid,{
            url: req.body.url,
            title: req.body.title,
            author: req.body.author,
            price: req.body.price,
            desc: req.body.desc,
            language: req.body.language,
        });
        return res.status(200).json({ message: "Book updated successfully",});
    } catch (error) {
        return res.status(500).json({ message: "Internal server error in update-book" });
    }
});

router.delete("/delete-book",authenticationToken, async (req, res) => {
    try {
        const {bookid} = req.headers;
        await Book.findByIdAndDelete(bookid);
        return res.status(200).json({ message: "Book deleted successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error in delete-book" });
    }
});

router.get("/get-all-books", async (req, res) => {
    try {
        const books = await Book.find().sort({createdAt: -1});
        return res.status(200).json({
            data: books,
        });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error in get-all-books" });
    }
});

router.get("/get-recent-books", async (req, res) => {
    try {
        const books = await Book.find().sort({createdAt: -1}).limit(4);
        return res.status(200).json({
            data: books,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error in get-recent-books" });
    }
});

router.get("/book-details/:id",async (req, res) => {
    try {
        const {id} = req.params;
        const book = await Book.findById(id);
        return res.status(200).json({
            data: book,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error in book-details" });
    }
});

export default router;