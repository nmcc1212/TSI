import mongoose from "mongoose";
import todoSchema from "./schema";
import usersSchema from "./UsersSchema";
import { randomInt, randomUUID } from "crypto";

const Todo = mongoose.model("todos", todoSchema)
const Users = mongoose.model("users", usersSchema)

async function main() {
    await mongoose.connect("mongodb://100.125.70.69:27017/todo-list", {
        authSource: "admin",
        user: "root",
        pass: "password",
    });
    createItem()
    createUser()
    getTodos()
    getUsers()
}
main().then(()=> console.log("ree")).catch(e => console.error(e))

async function createItem() {
    // get most recent id
    const todos = await Todo.find().sort({id: -1}).limit(1)
    let lastId = todos[0].id
    // create 1 new item
    const todo = new Todo({
        id: lastId + 1,
        todo: "read",
        userId: 1
    })
    await todo.save()
    console.log(todo)
}

async function createUser() {
    const ids = await Users.find().sort({userID: -1}).limit(1)
    let lastId = ids[0].userID
    const user = new Users({
        userID: lastId + 1,
        username: "test",
        password: "test",
        signUpDate: Date.now
    })
}

async function getTodos() {
    const todos = await Todo.find()
    return todos
}

async function getUsers() {
    const users = await Users.find()
    return users
}

async function changeName() {
    const users = await Users.find()
    for (const user of users) {
        let name = randomInt(1, 100)
        user.username = "test", name
        await user.save()
    }
}
async function PushDate() {
    const todos = await Todo.find()
    const len = todos.length
    for (let i = 0; i <= len; i++) {
        let newDate = todos[i].expiryDate
        if (newDate !== null && newDate !== undefined) {
            newDate.setFullYear(newDate.getFullYear() + 1)
        }
        todos.expiryDate = newDate
        await todo.save()
    }
    console.log("Added expiry date")
}