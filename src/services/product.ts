import { History } from "../interfaces/history";
import { Product } from "../interfaces/product";
import { QueryProduct } from "../interfaces/queryModel";
import history from "../models/history";
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

        const totalPages = Math.ceil(total / limit)
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

    static async update(id: string, body: Partial<Product>) {
        const currentProduct = await productModel.findById(id)
        const fieldsToSaveHistory = ['price', 'stock']

        if (!currentProduct) {
            console.error('Producto no encontrado');
            return;
          }
          
        fieldsToSaveHistory.forEach( async (field) => {
            const newValue = body[field as keyof Product]
            const currentValue = currentProduct[field as keyof Product]

            if( currentValue !== newValue ){
                const changeHistory: History = {
                    productId: currentProduct.id,
                    changedField: field,
                    newValue:  newValue as string,
                    previousValue: currentValue
                }

                const newChange = new history(changeHistory)
                await newChange.save()
            }
        })

        const newProduct = await productModel.findByIdAndUpdate(id, body, { new: true })
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