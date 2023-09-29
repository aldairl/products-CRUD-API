import { Tag } from '../interfaces/product'
import tagModel from '../models/tags'

class TagService {
    static async getAll() {
        return await tagModel.find()
    }

    static async create(body: Tag) {
        const tag = new tagModel(body)
        return await tag.save()
    }

    static async update(id: string, body: Tag) {
        const tag = await tagModel.findByIdAndUpdate(id, body, { upsert: true })
        return tag
    }

    static async delete(id: string) {
        await tagModel.deleteOne({ _id: id })
        return true
    }
}

export default TagService