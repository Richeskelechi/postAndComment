import Comment from "../models/comments.js";

const allComment = async (req, res) => {
    let commentId = req.params.commentId;
    if (!commentId) {
        try {
            const comment = await Comment.find();
            res.status(200).json(comment);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    } else {
        try {
            const result = await Comment.findOne({ _id: commentId });
            if (!result) {
                return res.send("No comment with that Id found");
            } else {
                res.json(result)
            }
        } catch (error) {
            // mongodb has an id Format. so if you specify a wrong format you will have a cast Error. So here i am checking for cast error 
            if (error.name == 'CastError') {
                return res.send("The comment id specified is not known")
            }
            return res.send("An error occured");
        }
    }

}
export default allComment;