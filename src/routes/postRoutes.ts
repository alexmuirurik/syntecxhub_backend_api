import express from "express"

const postRouter = express.Router()

postRouter.get("/", (req, res) => {
    res.send("Hello World!")
})

export default postRouter
