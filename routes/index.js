import express from 'express';
import allComment from '../controllers/allComment.js';
import allPost from '../controllers/allPost.js';
import commentByPostId from '../controllers/commentByPostId.js';
import comments from '../controllers/comments.js';
import deleteComment from '../controllers/deleteComment.js';
import deletePost from '../controllers/deletePost.js';
import posts from '../controllers/posts.js';
import commentValidation from '../middleware/commentValidation.js';
import postValidate from '../middleware/postValidation.js';

const router = express.Router();

// inserting a comment to tha database 
router.post('/post', postValidate, posts);

// viewing all post or view one using the id of the post 
router.get('/allpost/:postId?', allPost);

// inserting a comment to a post using the id of the post 
router.post('/:postId?/comment', commentValidation, comments);

// viewing all comments or view one comment using the comment id 
router.get('/allcomments/:commentId?', allComment);

// viewing all comments related to a post using the post id 
router.get('/comments/:postId?', commentByPostId);

// deleting a comment in a post 
router.delete('/deletecomment/:commentId?', deleteComment);

// deleting a post together with all the comments in that post 
router.delete('/deletepost/:postId?', deletePost);

export default router;