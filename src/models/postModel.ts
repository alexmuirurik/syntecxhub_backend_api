import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
    user: mongoose.Schema.Types.ObjectId,
})

export const Post = mongoose.model("Post", postSchema)