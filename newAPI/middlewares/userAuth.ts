import { Response, Request, NextFunction } from "express";
import User from "../schemas/usersSchema";

async function authenticateUser(req: Request, res: Response, next: NextFunction) {
    if (!req.body.username || !req.body.password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (!user || password != user.password) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        next();
    }
    catch (error) {
        res.status(500).json({ message: 'Internal server error' });
        console.error(error);
    }
}
export default authenticateUser;