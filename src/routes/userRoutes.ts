import express from "express"
import {
    createUser,
    deleteUser,
    getUser,
    getUsers,
    updateUser,
} from "../controllers/usersController"

const userRoutes = express.Router()
// User Routes
userRoutes.get("/", getUsers)
userRoutes.get("/:id", getUser)
userRoutes.post("/", createUser)
userRoutes.put(":id", updateUser)
userRoutes.delete("/:id", deleteUser)

export default userRoutes
