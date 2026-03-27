import express from "express"
import jwt from "jsonwebtoken"

export const authenticate = (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1]
        const { user } = jwt.verify(
            token,
            process.env.JWT_SECRET as string,
        ) as { user: string }
        req.user = user
        next()
    } else {
        res.status(401).send("Unauthorized")
    }
}
