import express from "express"
import { Strategy as LocalStrategy } from "passport-local"
import { User } from "../models/userModel"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const authRouter = express.Router()

authRouter.post("/register", async (req, res) => {
    const { email, password } = req.body
    const existingUser = await User.findOne({ email })
    if (existingUser) {
        return res.status(400).json({ message: "User already exists" })
    }
    const hashedPassword = bcrypt.hashSync(password, 10)
    const user = await User.create({ email, password: hashedPassword })
    res.status(201).json(user)
})

authRouter.post("/login", async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user) {
        return res.status(400).json({ message: "User not found" })
    }
    if (bcrypt.compareSync(password, user.password)) {
        return res.status(400).json({ message: "Incorrect password" })
    }
    const token = jwt.sign({ email }, "secret", { expiresIn: "1h" })
    res.status(200).json({ token })
})

authRouter.post("/logout", (req, res) => {
    res.status(200).json({ message: "Logged out successfully" })
})

export default authRouter
