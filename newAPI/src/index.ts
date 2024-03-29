import express, { Request, Response } from "express";
import app from './app';
import mongoose from "mongoose";
import Post from "./schemas/postsSchema";
import User from "./schemas/usersSchema";
import postRouter from "./routes/postRoutes";
import userRouter from "./routes/userRoutes";
import loggerMiddleware from "./middlewares/logger";
import { create } from "domain";
import http from 'http';

// const app = express();
const port = 3101;

app.use(express.json());
app.use(loggerMiddleware);

app.use("/posts", postRouter);
app.use("/users", userRouter);

async function main() {
  await mongoose.connect("mongodb://100.125.70.69:27017/socialAPI", {
    authSource: "admin",
    user: "root",
    pass: "password",
  });
  console.log("Connected to MongoDB");
  createHttpServer();
}

main().catch((err) => {
  console.error(err);
});

function createHttpServer() {
  const httpServer: http.Server = app.listen(port, () => {
    console.log('server started at http://localhost:' + port);
  });

  return httpServer;
}

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});
export default createHttpServer;