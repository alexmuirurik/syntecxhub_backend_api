import mongoose from "mongoose"
import app from "../app"

const port = process.env.PORT || 3000

export const connectDB = async () => {
    try {
        console.log("Connecting to database...")
        const mongodb = await mongoose.connect(
            process.env.MONGODB_URI || "mongodb://localhost:27017/syntecxhub",
        )
        console.log("Connected to database:", mongodb.connection.host)
        app.listen(port, () => {
            console.log("Server is running on port 3000")
        })
    } catch (error) {
        console.error("Error connecting to database:", error)
    }
}
