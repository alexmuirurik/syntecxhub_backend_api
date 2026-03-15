import express from "express"

const router = express.Router()
// User Routes
router.get("/users", (req, res) => {
    res.send("Hello World!")
})
router.get("/users/:id", (req, res) => {
    res.send("Hello World!")
})
router.post("/users", (req, res) => {
    res.send("Hello World!")
})
router.put("/users/:id", (req, res) => {
    res.send("Hello World!")
})
router.delete("/users/:id", (req, res) => {
    res.send("Hello World!")
})

export default router