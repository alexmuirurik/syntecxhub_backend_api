import { Request, Response } from "express"
import { Product } from "../models/productModel"

export class ProductController {
    createProduct = async (req: Request, res: Response) => {
        try {
            const {
                name,
                description,
                price,
                quantity,
                image,
                category,
                user,
            } = req.body
            const product = new Product({
                name,
                description,
                price,
                quantity,
                image,
                category,
                user,
            })
            await product.validate()
            const savedProduct = await product.save()
            res.status(201).json(savedProduct)
        } catch (error) {
            res.status(500).json({ error })
        }
    }

    getProducts = async (req: Request, res: Response) => {
        try {
            const products = await Product.find()
            res.json(products)
        } catch (error) {
            res.status(500).json({ error })
        }
    }

    getProduct = async (req: Request, res: Response) => {
        try {
            const product = await Product.findById(req.params.id)
            if (!product) {
                return res.status(404).json({ message: "Product not found" })
            }
            res.json(product)
        } catch (error) {
            res.status(500).json({ error })
        }
    }

    updateProduct = async (req: Request, res: Response) => {
        try {
            const product = Product.findById(req.params.id)
            if (!product) {
                return res.status(404).json({ message: "Product not found" })
            }
            const {
                name,
                description,
                price,
                quantity,
                image,
                category,
                user,
            } = req.body
            const updateProduct = new Product({
                name,
                description,
                price,
                quantity,
                image,
                category,
                user,
            })
            updateProduct.validate()
            const updatedProduct = await updateProduct.save()
            res.json(updateProduct)
        } catch (error) {
            res.status(500).json({ error })
        }
    }

    deleteProduct = async (req: Request, res: Response) => {
        try {
            await Product.findOneAndDelete({ _id: req.params.id })
            res.json({ message: "Product deleted successfully" })
        } catch (error) {
            res.status(500).json({ error })
        }
    }
}
