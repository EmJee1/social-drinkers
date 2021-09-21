import { Router } from 'express'
import validate from '../../../middlewares/validate'
import * as controller from './auth.email.controller'
import * as validation from './auth.email.validation'

const router = Router()

router.post('/register', validate(validation.register), controller.register)

export const prefix = '/auth/email'
export default router
