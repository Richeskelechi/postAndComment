import Post from '../models/posts.js';
import { validationResult } from 'express-validator';

const posts = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()[0].msg });
    }
    try {
        await Post.create({
            fullname: req.body.fullname,
            post: req.body.post,
        }).then(user => res.json(user));
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
}

export default posts;
