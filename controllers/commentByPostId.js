import Comment from "../models/comments.js";

const commentByPostId = async (req, res) => {
    let postId = req.params.postId;
    if (!postId) {
        return res.send("You must specify a post id")
    }
    try {
        const result = await Comment.find({ postId: postId });
        if (!result) {
            return res.send("No comment with that Post Id found");
        } else {
            res.json(result)
        }
    } catch (error) {
        // mongodb has an id Format. so if you specify a wrong format you will have a cast Error. So here i am checking for cast error 
        if (error.name == 'CastError') {
            return res.send("The post id specified is not known")
        }
        return res.send("An error occured");
    }

}
export default commentByPostId;