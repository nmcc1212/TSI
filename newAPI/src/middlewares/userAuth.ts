import { Response, Request, NextFunction } from "express";
import User from "../schemas/usersSchema";
import bcrypt from "bcrypt";

async function authenticateUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!req.body.auth.username || !req.body.auth.password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }
  try {
    const username = req.body.auth.username;
    const password = req.body.auth.password;
    const user = await User.findOne({ username });

    if (!user) {
      console.log("User not found");
      return res.status(401).json({ message: "Unauthorized" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    req.user = user.toObject();
    next();
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    console.error(error);
  }
}
export default authenticateUser;
