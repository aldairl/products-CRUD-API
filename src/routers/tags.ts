import { Router } from 'express'
import TagController from '../controllers/tags'

const tagRoutes = Router()
tagRoutes.get('/', TagController.getTags)
tagRoutes.post('/', TagController.createTag)

tagRoutes.patch('/:id', TagController.updateTag)
tagRoutes.delete('/:id', TagController.deleteTag)

export default tagRoutes