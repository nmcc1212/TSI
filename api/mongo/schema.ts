import { Schema } from "mongoose";

const todoSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  todo: { type: String, required: true },
  completed: { type: Boolean, default: false },
  userId: { type: Number, required: true },
  expiryDate: { type: Date },
});

export default todoSchema;
