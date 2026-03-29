import express from "express"
import { Post } from "../models/postModel"

export class postController {
    createPost = async (req: express.Request, res: express.Response) => {
        try {
            const { title, description, image, user } = req.body as any
            const post = new Post({
                title,
                description,
                image,
                user,
            })
            await post.validate()
            const savedPost = await post.save()
            res.status(201).json(savedPost)
        } catch (error) {
            res.status(500).json({ error })
        }
    }
}
