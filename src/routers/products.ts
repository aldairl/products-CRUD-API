import { Router } from 'express'
import ProductController from '../controllers/products'
import { validateId } from '../middlewares/product'

const productRoutes = Router()

productRoutes.get('/', ProductController.getProducts)
productRoutes.post('/', ProductController.createProduct)

productRoutes.get('/:id', validateId, ProductController.getProductById)
productRoutes.patch('/:id', validateId, ProductController.updateProduct)
productRoutes.delete('/:id', validateId, ProductController.deleteProduct)

export default productRoutes