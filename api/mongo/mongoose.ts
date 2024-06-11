import mongoose from "mongoose";
import todoSchema from "./schema";

const Todo = mongoose.model("todos", todoSchema);

async function main() {
  await mongoose.connect("mongodb://100.125.70.69:27017/todo-list", {
    authSource: "admin",
    user: "root",
    pass: "password",
  });

  const todos = await Todo.find();
  console.log(todos);
  await create5items();
  await deleteCompleted();
  await addExpiryDate();
}
main()
  .then(() => console.log("ree"))
  .catch((e) => console.error(e));

async function create5items() {
  // get most recent id
  const todos = await Todo.find().sort({ id: -1 }).limit(1);
  console.log(todos);
  let lastId = todos[0].id;
  console.log(lastId);
  // create 5 new items
  for (let i = 1; i <= 5; i++) {
    const todo = new Todo({
      id: lastId + i,
      todo: `Todo ${i}`,
      userId: 1,
    });
    await todo.save();
    console.log(todo);
  }
}

async function deleteCompleted() {
  console.log("Deleting completed items");
  await Todo.deleteMany({ completed: true });
  console.log("Deleted completed items");
}

async function addExpiryDate() {
  console.log("Adding expiry date");
  const todos = await Todo.find();
  let year1 = new Date();
  year1.setFullYear(year1.getFullYear() + 1);
  for (const todo of todos) {
    todo.expiryDate = year1;
    await todo.save();
  }
  console.log("Added expiry date");
}
