import mongoose from "mongoose"

export const productSchema = new mongoose.Schema({
    name: String,
    description: {
        type: String,
        required: false,
    },
    price: Number,
    quantity: Number,
    image: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Image",
        required: false,
    },
    category: {
        type: String,
        required: false,
    },
    user: mongoose.Schema.Types.ObjectId,
})

export const Product = mongoose.model("Product", productSchema)
