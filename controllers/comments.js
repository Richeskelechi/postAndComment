import Comment from '../models/comments.js';
import Post from '../models/posts.js';
import { validationResult } from 'express-validator';

const comments = async (req, res) => {
    // here i am getting the Id from from the req.params 
    let postId = req.params.postId;
    // here i am checking if the id does not exist 
    if (!postId) {
        return res.send("You must specify a post id")
    }
    // if the id exist i am checking the body to check if the fields are filled and if there are any errors 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()[0].msg });
    }
    try {
        // here i am checking if the id from the req.params is a known id from a post 
        const result = await Post.findOne({ _id: postId });
        // if not i return an error 
        if (!result) {
            return res.send("No post with that Id found");
        }
        // if the id exist then i want to insert the details to the comment table 
        const comment = await Comment.create({
            postId: postId,
            fullname: req.body.fullname,
            comment: req.body.comment,
        });
        res.json(comment)
    } catch (error) {
        // mongodb has an id Format. so if you specify a wrong format you will have a cast Error. So here i am checking for cast error 
        if (error.name == 'CastError') {
            return res.send("The post id specified is not known")
        }
        return res.send("An error occured");
    }
}

export default comments;
