import mongoose from "mongoose";
import { NewsSchema } from "./newsSchema";

const News = mongoose.model("a07faf2b80629f2f8fca00b937673fcc91403a6772ea14dae599c7737a784697", NewsSchema);

async function main() {
    await mongoose.connect("mongodb://100.125.70.69:27017/newsDB", {
        authSource: "admin",
        user: "root",
        pass: "password",
    });
    getNews()
}

async function getNews() {
    const newsFind = await News.find()
    console.log(newsFind)
}

async function deadLink(id) {
    const newsFind = await News.findById(id)
    console.log(newsFind)
    newsFind.updateOne
    // change link to web.arhcive.org/{$link}
}

main().then(() => console.log("done")).catch((err) => console.log(err));