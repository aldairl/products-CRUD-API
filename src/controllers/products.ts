import { Request, Response } from "express";
import { ProductService } from '../services/product';
import { QueryProduct } from '../interfaces/queryModel';

class ProductController {

    static async getProducts(req: Request, res: Response) {
        // get params from request
        const query = req.query as QueryProduct

        // get products from model 
        const products = await ProductService.getAll(query)
        res.json(products)
    }

    static async getProductById(req: Request, res: Response) {
        const { id } = req.params
        const product = await ProductService.getById(id)
        res.json(product)
    }

    static async createProduct(req: Request, res: Response) {
        const { body } = req
        try {
            const product = await ProductService.create(body)
            res.json({
                error: null,
                product,
            })
        } catch (error) {
            res.status(500).json({
                error,
                msg: "Can not create the product",
                body
            })
        }
    }

    static async updateProduct(req: Request, res: Response) {
        const { id } = req.params
        const { body } = req

        const product = await ProductService.update(id, body)
        res.json(product)
    }

    static async deleteProduct(req: Request, res: Response) {
        const { id } = req.params
        const result = await ProductService.delete(id)

        res.json({
            delete: result
        })
    }
}

export default ProductController