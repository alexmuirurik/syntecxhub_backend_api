import express from "express"
import { UsersController } from "../controllers/usersController"

const userRoutes = express.Router()
const userController = new UsersController()

userRoutes.get("/", userController.getUsers)
userRoutes.get("/:id", userController.getUser)
userRoutes.post("/", userController.createUser)
userRoutes.put(":id", userController.updateUser)
userRoutes.delete("/:id", userController.deleteUser)

export default userRoutes
