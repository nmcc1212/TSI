import { Router, Response, Request } from "express";
import User from "../schemas/usersSchema";

const userRouter = Router();

// username, email, and password required
userRouter.post("/", async (req: Request, res: Response) => {
    if (!req.body.username || !req.body.email || !req.body.password) {
        return res.status(400).json({ message: 'username, email and password are required' });
    }
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });
    console.log("Created new user: ", user, "with id: ", user._id, "and email: ", user.email), "and password: ", user.password;
    await user.save();
    res.json(user);
});


// can take _id, email, or username as query parameter
userRouter.get("/", async (req: Request, res: Response) => {
    if (req.query._id !== undefined) {
        let users = await User.find({ _id: req.query._id });
        return res.json(users);
    }
    else if (req.query.email !== undefined) {
        let users = await User.find({ email: req.query.email });
        return res.json(users);
    }
    else if (req.query.username !== undefined) {
        let users = await User.find({ username: req.query.username });
        return res.json(users);
    }
    else {
        let users = await User.find();
        return res.json(users);
    }
});

export default userRouter;