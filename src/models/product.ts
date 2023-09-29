import { Schema, model } from 'mongoose'
import { Product } from '../interfaces/product'

const ProductSchema = new Schema<Product>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    sku: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    tags: { type: [String], required: true },
    stock: { type: Number, required: true },
})

ProductSchema.methods.toJSON = function(){
    const { __v, _id, ...data} = this.toObject()
    return { ...data, id: _id}
}

export default model<Product>('product', ProductSchema)