import express from 'express'
import { createPoll, getPolls, votePoll, } from '../controllers/pollController.js'

const route = express.Router()

route.post('/createPoll',createPoll)
route.get('/getPolls' , getPolls)
route.put('/votePoll', votePoll)

export default route