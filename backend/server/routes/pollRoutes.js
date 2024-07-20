import express from 'express'
import { createPoll } from '../controllers/pollController.js'

const route = express.Router()

route.post('/createPoll',createPoll)
export default route