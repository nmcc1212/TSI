import { Router, Response, Request } from "express";
import Post from "../schemas/postsSchema";
import User from "../schemas/usersSchema";
import authenticateUser from "../middlewares/userAuth";
import { time } from "console";
const postRouter = Router();

postRouter.get("/", async (req: Request, res: Response) => {
    if (req.query.userID !== undefined) {
        const posts = await Post.find({ userID: req.query.userID });
        return res.json(posts);
    }
    if (req.query.postId !== undefined) {
        const post = await Post.findOne({id: req.query.postId});
        return res.json(post);
    }
    const posts = await Post.find();
    return res.json(posts);
});

postRouter.delete('/:postID',authenticateUser, async (req: Request, res: Response) => {

    try {
        const postID = req.params.postID;

        if (!req.params.postID) {
            return res.status(400).json({ message: 'Post ID is required' });
        }

        const post = await Post.findOne({ id: postID});
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }   
        await post.deleteOne();
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
        const post = await Post.findOne({ id: postId });
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

postRouter.post('/createPost', async (req: Request, res: Response) => {
    if (!req.body.content) {
        return res.status(400).json({ message: 'Content is required' });
    }
    if (!req.body.userID) {
        return res.status(400).json({ message: 'User ID is required' });
    }
    try {
        const content = req.body.content;
        const userID = req.body.userID;
        let timestamp = new Date();
        const post = new Post({ content, userID, timestamp});
        await post.save();
        res.json({ message: 'Post created' });

    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
        console.error(error);
    }
});

postRouter.post('/likePost/:postId',authenticateUser, async (req: Request, res: Response) => {
    if (!req.params.postId) {
        return res.status(400).json({ message: 'Post ID is required' });
    }
    try {
        const postId = req.params.postId;
        const user = req.body.user;
        const post = await Post.findOne({ id: postId });
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        const timestamp = new Date();
        post.likes.push({ userID: user.id, timestamp });
        await post.save();
        res.json({ message: 'Post liked' });

    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
        console.error(error);
    }
});

export default postRouter;