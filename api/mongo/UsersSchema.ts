import { Schema } from "mongoose";

const usersSchema = new Schema({
  userID: { type: Number, required: true, unique: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  signUpDate: { type: Date, default: Date.now },
});

export default usersSchema;
