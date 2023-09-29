import { Router } from 'express'
import productRoutes from './products'
import tagRoutes from './tags'
import historyRoutes from './history'

const indexRoutes = Router()

indexRoutes.use('/products', productRoutes)
indexRoutes.use('/tags', tagRoutes)
indexRoutes.use('/history', historyRoutes)

export default indexRoutes