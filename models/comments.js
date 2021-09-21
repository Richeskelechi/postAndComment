import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const commentSchema = new Schema({
    postId: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Comment = mongoose.model('Comment', commentSchema);
export default Comment;