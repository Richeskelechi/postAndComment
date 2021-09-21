import Comment from '../models/comments.js';
import { validationResult } from 'express-validator';

const updateComment = async (req, res) => {
    let commentId = req.params.commentId;
    if (!commentId) {
        return res.send("You must specify a Comment id of the Comment you want to Update")
    }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()[0].msg });
    }
    try {
        const result = await Comment.findByIdAndUpdate(commentId, req.body, { new: true, runValidators: true });
        if (!result) {
            return res.send("No Comment with that Comment Id found");
        } else {
            res.json({ user: result })
        }
    } catch (error) {
        // mongodb has an id Format. so if you specify a wrong format you will have a cast Error. So here i am checking for cast error 
        if (error.name == 'CastError') {
            return res.send("The Comment id specified is not known")
        }
        return res.send("An error occured");
    }

}
export default updateComment;