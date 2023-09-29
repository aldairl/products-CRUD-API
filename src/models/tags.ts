import { Schema, model } from 'mongoose'
import { Tag } from '../interfaces/product'

const tagSchema = new Schema<Tag>({
    name: { type: String, required: true }
})

export default model<Tag>('tag', tagSchema)