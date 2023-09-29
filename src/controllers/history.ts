import { Request, Response } from "express"
import { QueryProduct } from "../interfaces/queryModel"
import { HistoryProductsService } from "../services/history"

class HistoryController {

    static async getProductsHistory(req: Request, res: Response) {
        // get params from request
        const query = req.query as QueryProduct

        // get products from model 
        const history = await HistoryProductsService.getAll(query)
        res.json(history)
    }

    static async getProductHistory(req: Request, res: Response) {
        const { id } = req.params
        const productHistory = await HistoryProductsService.getById(id)
        res.json(productHistory)
    }
}

export default HistoryController