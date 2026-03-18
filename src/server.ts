import app from "./app"
import { connectDB } from "./config/db"
import productRoutes from "./routes/productRoutes"
import userRoutes from "./routes/userRoutes"

app.use("/api/v1/users", userRoutes)
app.use("/api/v1/products", productRoutes)


connectDB()
