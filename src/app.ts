import express from "express"
import cors from "cors"
import passport from "passport"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))
app.use(cors())
app.use(passport.initialize())

export default app