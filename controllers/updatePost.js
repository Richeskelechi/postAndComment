import Post from '../models/posts.js';
import { validationResult } from 'express-validator';

const updatePost = async (req, res) => {
    let postId = req.params.postId;
    if (!postId) {
        return res.send("You must specify a Post id of the Post you want to Update")
    }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()[0].msg });
    }
    try {
        const result = await Post.findByIdAndUpdate(postId, req.body, { new: true, runValidators: true });
        if (!result) {
            return res.send("No Post with that Post Id found");
        } else {
            res.json({ user: result })
        }
    } catch (error) {
        // mongodb has an id Format. so if you specify a wrong format you will have a cast Error. So here i am checking for cast error 
        if (error.name == 'CastError') {
            return res.send("The Post id specified is not known")
        }
        return res.send("An error occured");
    }

}
export default updatePost;