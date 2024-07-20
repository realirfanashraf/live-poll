import express from 'express'
import { createPoll, getPolls } from '../controllers/pollController.js'

const route = express.Router()

route.post('/createPoll',createPoll)
route.get('/getPolls' , getPolls)
export default route