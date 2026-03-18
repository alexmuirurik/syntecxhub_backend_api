import express from "express"
import { User } from "../models/userModel"

export const createUser = async (
    req: express.Request,
    res: express.Response,
) => {
    try {
        const { name, email, password } = req.body
        const user = new User({ name, email, password })
        await user.validate()
        const savedUser = await user.save()
        res.status(201).json(savedUser)
    } catch (error) {
        res.status(500).json({ error })
    }
}

export const getUsers = async (req: express.Request, res: express.Response) => {
    try {
        const users = await User.find().select("-password")
        res.json(users)
    } catch (error) {
        res.status(500).json({ error })
    }
}

export const getUser = async (req: express.Request, res: express.Response) => {
    try {
        const user = await User.findById(req.params.id)
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        res.json(user)
    } catch (error) {
        res.status(500).json({ error })
    }
}

export const updateUser = async (
    req: express.Request,
    res: express.Response,
) => {
    try {
        const { name, email, password } = req.body
        const user = await User.findById(req.params.id)
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        user.name = name
        user.email = email
        user.password = password
        await user.save()
        res.json(user)
    } catch (error) {
        res.status(500).json({ error })
    }
}

export const deleteUser = async (
    req: express.Request,
    res: express.Response,
) => {
    try {
        await User.findOneAndDelete({ _id: req.params.id })
        res.json({ message: "User deleted successfully" })
    } catch (error) {
        res.status(500).json({ error })
    }
}
