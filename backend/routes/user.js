import express from 'express';
import User from '../models/user.js';
import bcrypt from 'bcryptjs';
const router = express.Router();
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
import authenticationToken from './userAuth.js';



router.post('/sign-up', async(req, res) => {
    try {
        const { username, email, password ,address} = req.body;
        if(username.length <4){
            return res.status(400).json({message: "Username should be atleast 4 characters long"});
        }

        const existingUsername = await User.findOne({username: username});
        if(existingUsername){
            return res.status(400).json({message: "Username already exists"});
        }
        
        const existingEmail = await User.findOne({email: email });
        if(existingEmail){
            return res.status(400).json({message: "Email already exists"});
        }

        if(password.length < 6){
            return res.status(400).json({message: "Password should be atleast 6 characters long"});
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            username: username,
            email: email,
            password: hashPassword,
            address: address,
        });
        await newUser.save();
        return res.status(201).json({message: "User registered successfully"});

    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});

router.post('/login', async(req, res) => {
    try {
        const { username, password } = req.body;
        const existingUser = await User.findOne({username: username});
        if(!existingUser){
            return res.status(400).json({message: "Invalid credentials"});
        }

        await bcrypt.compare(password, existingUser.password, (err, result) => {
            if(result){
                const authClaims =[
                    {name: existingUser.username},
                    {role: existingUser.role},
                ]
                const token = jwt.sign({authClaims}, `${process.env.JWT_SECRET_KEY}`,{expiresIn: '30d'});

                return res.status(200).json({id: existingUser._id, role: existingUser.role, token: token});
            } else {
                return res.status(400).json({message: "Invalid credentials"});
            }
        });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});

router.get('/profile-info',authenticationToken ,async(req, res) => {
    try {
        const {id} = req.headers;
        const data = await User.findById(id).select('-password');
        return res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
        
    }

});

router.put('/update-address',authenticationToken, async(req, res) => {
    try {
        const {id} = req.headers;
        const { address} = req.body;
        await User.findByIdAndUpdate(id, {address: address});
        return res.status(200).json({message: "Address updated successfully"});
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});

export default router;