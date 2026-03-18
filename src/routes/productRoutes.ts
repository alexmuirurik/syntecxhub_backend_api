import express from "express"
import {
    createProduct,
    deleteProduct,
    getProduct,
    getProducts,
    updateProduct,
} from "../controllers/productController"

const productRoutes = express.Router()
// User Routes
productRoutes.get("/", getProducts)
productRoutes.get("/:id", getProduct)
productRoutes.post("/", createProduct)
productRoutes.put("/:id", updateProduct)
productRoutes.delete("/:id", deleteProduct)

export default productRoutes
