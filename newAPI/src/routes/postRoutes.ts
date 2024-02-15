import { Router, Response, Request } from "express";
import Post from "../schemas/postsSchema";
import authenticateUser from "../middlewares/userAuth";
const postRouter = Router();

// auth required, returns all posts, can filter by userID or _id
postRouter.get("/", async (req: Request, res: Response) => {
  if (req.query.userID !== undefined) {
    const posts = await Post.find({ userID: req.query.userID });
    return res.json(posts);
  }
  if (req.query._id !== undefined) {
    const post = await Post.findOne({ _id: req.query._id });
    return res.json(post);
  }
  const posts = await Post.find();
  return res.json(posts);
});

// auth required, _id required in params
// TODO check if auth user is the same as post user
postRouter.delete(
  "/:_id",
  authenticateUser,
  async (req: Request, res: Response) => {
    try {
      const _id = req.params._id;
      if (!req.params._id) {
        return res.status(400).json({ message: "_id is required" });
      }
      if (!req.user) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      const post = await Post.findOne({ _id: _id });
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
      if (post.userID !== req.user.id) {
        const message = "User " + req.user.id + " is not authorized to delete this post owned by " + post.userID;
        console.log (post.userID, req.user.id)
        return res.status(401).json(message);
      }
      await post.deleteOne();
      res.json({ message: "Post deleted" });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
      console.error(error);
    }
  }
);
//  auth required, _id required in url, content required in body,returns updated post
postRouter.patch(
  "/:_id",
  authenticateUser,
  async (req: Request, res: Response) => {
    if (!req.params._id) {
      return res.status(400).json({ message: "_id is required" });
    }
    if (!req.body.content) {
      return res.status(400).json({ message: "Content is required" });
    }
    try {
      const _id = req.params._id;
      const content = req.body.content;
      const post = await Post.findOne({ _id });
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
      if (!req.user) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      if (post.userID !== req.user.id) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      post.content = content;
      const updatedPost = await post.save();
      res.json(updatedPost);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
      console.error(error);
    }
  }
);

// content and userID required in body, returns created post
// TODO check if add user auth and check if userID is same as auth user
postRouter.post("/", async (req: Request, res: Response) => {
  if (!req.body.content) {
    return res.status(400).json({ message: "Content is required" });
  }
  if (!req.body.userID) {
    return res.status(400).json({ message: "User ID is required" });
  }
  try {
    const content = req.body.content;
    const userID = req.body.userID;
    let timestamp = new Date();
    const post = new Post({ content, userID, timestamp });
    const createdPost = await post.save();
    res.json(createdPost);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    console.error(error);
  }
});

// auth required, _id required in params, gets userID thru auth, returns updated post
// TODO check if auth user is the same as post user
postRouter.post(
  "/:_id/likes",
  authenticateUser,
  async (req: Request, res: Response) => {
    if (!req.params._id) {
      return res.status(400).json({ message: "_id is required" });
    }
    try {
      const _id = req.params._id;
      if (!req.user) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const userID = req.user.id;
      const post = await Post.findOne({ _id });
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
      const timestamp = new Date();
      post.likes.push({ userID: userID, timestamp });
      const likedPost = await post.save();
      res.json(likedPost);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
      console.error(error);
    }
  }
);

export default postRouter;
