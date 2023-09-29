import { Router } from 'express'
import HistoryController from '../controllers/history'

const historyRoutes = Router()
historyRoutes.get('/', HistoryController.getProductsHistory)
historyRoutes.get('/:id', HistoryController.getProductHistory)

export default historyRoutes