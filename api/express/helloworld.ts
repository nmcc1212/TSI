import express, { Request, Response } from "express";
import loggerMiddleware from "./loggerMiddleware";

const app = express();
const port = 3100;

app.use(loggerMiddleware);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.get("/news", (req: Request, res: Response) => {
  res.send("This is a news page");
});
