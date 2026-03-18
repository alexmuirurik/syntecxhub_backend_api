import mongoose from "mongoose"

export const fileSchema = new mongoose.Schema(
    {
        fileName: String,
        path: String,
        URL: String,
    },
    {
        timestamps: true,
    },
)

export const File = mongoose.model("File", fileSchema)
