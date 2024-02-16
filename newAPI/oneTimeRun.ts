// convert all password to hash
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import User from "./src/schemas/usersSchema";

async function main() {
    await mongoose.connect("mongodb://100.125.70.69:27017/socialAPI", {
      authSource: "admin",
      user: "root",
      pass: "password",
    });
    console.log("Connected to database");
    const users = await User.find();
    for (const user of users) {
        console.log("Converting user: ", user);
        const hashedPassword = await bcrypt.hash(user.password, 10);
        console.log("Converted password: ", hashedPassword);
        user.password = hashedPassword;
        const newPass = await user.save();
        console.log("New user: ", newPass);
    }
}
try {
    main();
}
catch (e) {
    console.log("Error: ", e);
}