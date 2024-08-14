import express from 'express'
import userAuth from '../middelwares/authMiddleware.js'
import { createJobController, getAllJobsController } from '../controllers/jobsController.js'

const router = express.Router()

//routes
// CREATE JOB || POST
router.post('/create-job', userAuth, createJobController)

//GET JOBS || GET
router.get('/get-jobs', userAuth, getAllJobsController)
export default router