import { Router, Response, Request } from "express";
import User from "../schemas/usersSchema";
import authenticateUser from "../middlewares/userAuth";
import bcrypt from "bcrypt";

const userRouter = Router();

// username, email, and password required
userRouter.post("/", async (req: Request, res: Response) => {
  if (!req.body.username || !req.body.email || !req.body.password) {
    return res
      .status(400)
      .json({ message: "username, email and password are required" });
  }
  // check if user already exists
  const email = req.body.email;
  const username = req.body.username;
  const plainPassword = req.body.password;

  const hashedPassword = await bcrypt.hash(plainPassword, 10);

  const usernameExists = await User.findOne({ username });
  if (usernameExists) {
    return res.status(400).json({ message: "username already exists" });
  }
  const emailExists = await User.findOne({ email });
  if (emailExists) {
    return res.status(400).json({ message: "email already exists" });
  }
  const newID = (await User.find({}).sort([["userID", -1]]))[0];
  const user = new User({
    id: newID,
    username: username,
    email: email,
    password: hashedPassword,
  });
  console.log(
    "Created new user: ",
    user,
    "with id: ",
    user.id,
    "and email: ",
    user.email
  ),
    "and password: ",
    user.password;
  const newUser = await user.save();
  res.json(newUser);
});

// can take _id, id, email, or username as query parameter
userRouter.get("/", async (req: Request, res: Response) => {
  if (req.query._id !== undefined) {
    let users = await User.find({ _id: req.query._id });
    return res.json(users);
  } else if (req.query.email !== undefined) {
    let users = await User.find({ email: req.query.email });
    return res.json(users);
  } else if (req.query.username !== undefined) {
    let users = await User.find({ username: req.query.username });
    return res.json(users);
  } else if (req.query.id !== undefined) {
    let users = await User.find({ id: req.query.id });
    return res.json(users);
  } else {
    let users = await User.find();
    return res.json(users);
  }
});
// can take email, username or password in body, must username and password in auth
userRouter.patch("/", authenticateUser, async (req: Request, res: Response) => {
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  if (!req.body.username && !req.body.email && !req.body.password) {
    return res.status(400).json({ message: "No fields to update" });
  }
  if (req.body.length > 1) {
    return res.status(400).json({ message: "Only one field can be updated at a time" });
  }
  const user = await User.findOne({ id: req.user.id });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  if (req.body.username) {
    user.username = req.body.username;
  }
  else if (req.body.email) {
    user.email = req.body.email;
  }
  else if (req.body.password) {
    user.password = await bcrypt.hash(req.body.password, 10);
  }
  else {
    return res.status(400).json({ message: "No fields to update" });
  }
  const updatedUser = await user.save();
  res.json(updatedUser);
});

// must have username and password as body
userRouter.delete(
  "/",
  authenticateUser,
  async (req: Request, res: Response) => {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const user = await User.findOne({ id: req.user.id });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    await user.deleteOne();
    res.json({ message: "Post deleted" });
  }
);

export default userRouter;
