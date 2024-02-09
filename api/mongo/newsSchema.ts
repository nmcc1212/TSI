import { Schema } from "mongoose";
export const NewsSchema = new Schema({
    id: Number,
    title: String,
    contentSnippet: String,
    date: Date
});
