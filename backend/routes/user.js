import express from 'express';

const router = express.Router();

router.post('/signup', async(req, res) => {
    try {
        res.send('Signup Route');
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});


export default router;