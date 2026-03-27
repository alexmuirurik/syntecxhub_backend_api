import passport from "passport"
import app from "./app"
import { connectDB } from "./config/db"
import productRoutes from "./routes/productRoutes"
import userRoutes from "./routes/userRoutes"
import authRoutes from "./routes/authRoutes"
import homeRoutes from "./routes/homeRoutes"

app.use("/api/v1/", homeRoutes)
app.use("/api/v1/auth", authRoutes)
app.use(
    "/api/v1/users",
    passport.authorize("bearer", { session: false }),
    userRoutes,
)
app.use(
    "/api/v1/products",
    passport.authorize("bearer", { session: false }),
    productRoutes,
)

connectDB()
