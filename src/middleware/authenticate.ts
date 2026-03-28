import express from "express"
import jwt from "jsonwebtoken"
import passport from "passport"

export const authenticate = passport.authorize("bearer", { session: false })

export const unless = (url: string, middleware: express.RequestHandler) => {
    return (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction,
    ) => {
        if (req.originalUrl.startsWith(url)) {
            next()
        } else {
            middleware(req, res, next)
        }
    }
}

const secretKey = "secret"
export const authenticateToken = (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) => {
    const token = req.headers.authorization
    if (token == null) {
        return res.status(401).json({ message: "No token provided" })
    }
    const [, newToken] = token.split(" ")
    jwt.verify(newToken, secretKey, (err, user) => {
        if (err) {
            return res.status(401).json({ message: "Invalid token" })
        }
        if (!user) {
            return res.status(401).json({ message: "Invalid token" })
        }
        req.user = user
        return next()
    })
}
