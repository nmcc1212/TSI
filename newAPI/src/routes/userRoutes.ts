import { Router, Response, Request } from "express";
import User from "../schemas/usersSchema";

const userRouter = Router();

userRouter.post("/", async (req: Request, res: Response) => {
    if (!req.body.name || !req.body.email || !req.body.password) {
        return res.status(400).json({ message: 'Name, email and password are required' });
    }
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });
    console.log("Created new user: ", user, "with id: ", user._id, "and email: ", user.email), "and password: ", user.password;
    await user.save();
    res.json(user);
});

export default userRouter;