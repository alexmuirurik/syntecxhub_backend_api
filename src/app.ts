import express from "express"
import cors from "cors"
import passport from "passport"
import { Strategy as BearerStrategy } from "passport-http-bearer"

const app = express()

app.use(express.json())
app.use(passport.initialize())
passport.use(
    new BearerStrategy((token, done) => {
        done(null, token)
    }),
)
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))
app.use(cors())

export default app
