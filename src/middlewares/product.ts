import { NextFunction, Request, Response } from 'express'
import { check, validationResult } from 'express-validator'

const validate = (req: Request, res: Response, next: NextFunction) => {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) throw errors
      return next()
    } catch (error) {
      res.status(400).json(error)
    }
  }

export const validateId = [
    check('id', 'product id is required').notEmpty().isMongoId(),
    validate
]