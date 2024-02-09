import express, { Request, Response } from "express";
// import app from './app';
import mongoose from "mongoose";
import Post from "./schemas/postsSchema";
import User from "./schemas/usersSchema";



const app = express();
const port = 3101;

async function main() {
  await mongoose.connect("mongodb://100.125.70.69:27017/socialAPI", {
    authSource: "admin",
    user: "root",
    pass: "password",
  });
}

main().catch((err) => {
  console.error(err);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.get("/Posts", async (req: Request, res: Response) => {
    const newsFind = await User.find()
    res.json (newsFind)
});

app.post("/newUser", async (req: Request, res: Response) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });
    await user.save();
    res.json(user);
});

app.get("/UsersPosts", async (req: Request, res: Response) => {
    const user= req.body.user
    const newsFind = await Post.find({user: user})
    res.json (newsFind)
});

app.get('/deletePost/:postId', async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;
        const postId = req.params.postId;
  
        const user = await User.findOne({ username });

        if (!user || password != user.password) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        const post = await Post.findOne({ _id: postId, author: user._id });
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
