import mongoose from "mongoose";
import  Post  from "./src/schemas/postsSchema";
import User from "./src/schemas/usersSchema";

async function main() {
    await mongoose.connect("mongodb://100.125.70.69:27017/socialAPI", {
    authSource: "admin",
    user: "root",
    pass: "password",
})}

