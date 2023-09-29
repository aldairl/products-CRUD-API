import { QueryProduct } from "../interfaces/queryModel"
import historyModel from "../models/history"

export class HistoryProductsService {
    static async getAll(query: QueryProduct) {
        const { _page, _limit, } = query

        const limit: number = parseInt(_limit ?? '6')
        const page: number = parseInt(_page ?? '1')

        const [total, history] = await Promise.all([
            await historyModel.countDocuments(),
            await historyModel.find()
                .limit(limit)
                .skip((page * limit) - limit)
        ])

        const totalPages = Math.ceil(total / limit)
        return { totalPages, history }
    }

    static async getById(id: string) {
        return await historyModel.find({ productId: id })
    }
}