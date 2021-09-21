import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const postSchema = new Schema({
    fullname: {
        type: String,
        required: true
    },
    post: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Post = mongoose.model('Post', postSchema);
export default Post;