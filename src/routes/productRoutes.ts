import express from "express"
import { ProductController } from "../controllers/productController"

const productRoutes = express.Router()
const productController = new ProductController()

productRoutes.get("/", productController.getProducts)
productRoutes.get("/:id", productController.getProduct)
productRoutes.post("/", productController.createProduct)
productRoutes.put("/:id", productController.updateProduct)
productRoutes.delete("/:id", productController.deleteProduct)

export default productRoutes
