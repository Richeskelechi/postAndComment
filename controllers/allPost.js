import Post from '../models/posts.js';

const allPost = async (req, res) => {
    let postId = req.params.postId;
    if (!postId) {
        try {
            const posts = await Post.find();
            res.status(200).json(posts);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    } else {
        try {
            const result = await Post.findOne({ _id: postId });
            if (!result) {
                return res.send("No post with that Id found");
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

}
export default allPost;