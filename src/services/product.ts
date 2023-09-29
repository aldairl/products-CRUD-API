import { Product } from "../interfaces/product";
import { QueryProduct } from "../interfaces/queryModel";
import productModel from '../models/product'

export class ProductService {

    static async getAll(query: QueryProduct) {
        const { _page, _limit, q = '' } = query

        const customQuery = { "name": { $regex: q, $options: 'i' } }
        const limit: number = parseInt(_limit ?? '6')
        const page: number = parseInt(_page ?? '1')

        const [total, products] = await Promise.all([
            await productModel.countDocuments(customQuery),
            await productModel.find(customQuery)
                .limit(limit)
                .skip((page * limit) - limit)
        ])

        const totalPages = Math.ceil(total/limit)
        return { totalPages, products }
    }

    static async getById(id: string) {
        return await productModel.findById(id)
    }

    static async create(body: Product) {
        try {
            const { id, ...product } = body
            const newProduct = new productModel(product)
            return await newProduct.save()

        } catch (error) {
            console.log(error)
            throw Error(`Error creaitin product${error}`)
        }
    }

    static async update(id: string, body: Product) {
        const newProduct = await productModel.findByIdAndUpdate(id, body, { upsert: true })
        return newProduct
    }

    static async delete(id: string) {
        try {
            await productModel.deleteOne({ _id: id })
            return true
        } catch (error) {
            return false
        }
    }
}