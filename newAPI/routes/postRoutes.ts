import { Router, Response, Request } from "express";
import Post from "../schemas/postsSchema";
import User from "../schemas/usersSchema";
import authenticateUser from "../middlewares/userAuth";
const postRouter = Router();

postRouter.get("/", async (req: Request, res: Response) => {
    if (req.query.userID !== undefined) {
        const posts = await Post.find({ userID: req.query.userID });
        res.json(posts);
    }
    const posts = await Post.find()
    res.json (posts)
});

postRouter.delete('/:postID',authenticateUser, async (req: Request, res: Response) => {

    try {
        const postID = req.params.postID;
        const username = req.body.username;
        const user = await User.findOne({ username });

        if (!req.params.postID) {
            return res.status(400).json({ message: 'Post ID is required' });
        }
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const post = await Post.findOne({ id: postID, userID: user.id });
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }   
        // await post.deleteOne();
        res.json({ message: 'Post deleted' });

    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
        console.error(error);
    }
});

postRouter.patch('/updatePost/:postId', async (req: Request, res: Response) => {
    if (!req.body.username || !req.body.password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }
    if (!req.params.postId) {
        return res.status(400).json({ message: 'Post ID is required' });
    }
    if (!req.body.content) {
        return res.status(400).json({ message: 'Content is required' });
    }
    try {
        const { username, password } = req.body;
        const postId = req.params.postId;
        const content = req.body.content;
  
        const user = await User.findOne({ username });

        if (!user || password != user.password) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        const post = await Post.findOne({ _id: postId, author: user._id });
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        post.content = content;
        await post.save();
        res.json({ message: 'Post updated' });

    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
        console.error(error);
    }
});

export default postRouter;