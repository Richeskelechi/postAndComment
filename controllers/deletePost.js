import Comment from "../models/comments.js";
import Post from '../models/posts.js';

const deletePost = async (req, res) => {
    let postId = req.params.postId;
    if (!postId) {
        return res.send("You must specify a Post id of the Post you want to delete")
    }
    try {
        const result = await Post.findOneAndDelete({ _id: postId });
        if (!result) {
            return res.send("No Post with that Post Id found");
        } else {
            await Comment.deleteMany({ postId: postId });
            res.json({ message: "Post Deleted" });
        }
    } catch (error) {
        // mongodb has an id Format. so if you specify a wrong format you will have a cast Error. So here i am checking for cast error 
        if (error.name == 'CastError') {
            return res.send("The Comment id specified is not known")
        }
        return res.send("An error occured");
    }

}
export default deletePost;