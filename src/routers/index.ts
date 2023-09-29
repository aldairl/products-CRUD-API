import { Router } from 'express'
import productRoutes from './products'
import tagRoutes from './tags'

const indexRoutes = Router()

indexRoutes.use('/products', productRoutes)
indexRoutes.use('/tags', tagRoutes)

export default indexRoutes