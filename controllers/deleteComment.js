import Comment from "../models/comments.js";

const deleteComment = async (req, res) => {
    let commentId = req.params.commentId;
    if (!commentId) {
        return res.send("You must specify a Comment id of the Comment you want to delete")
    }
    try {
        const result = await Comment.findOneAndDelete({ _id: commentId });
        if (!result) {
            return res.send("No comment with that Comment Id found");
        } else {
            res.json({message: "Comment Deleted"})
        }
    } catch (error) {
        // mongodb has an id Format. so if you specify a wrong format you will have a cast Error. So here i am checking for cast error 
        if (error.name == 'CastError') {
            return res.send("The Comment id specified is not known")
        }
        return res.send("An error occured");
    }

}
export default deleteComment;