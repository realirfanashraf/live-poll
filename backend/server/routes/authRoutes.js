import express from 'express'
import { registerUser , loginUser , validateToken} from '../controllers/authController.js'

const route = express.Router()


route.post('/register', registerUser)
route.post('/login' , loginUser)
route.post('/validateToken' , validateToken)
export default route