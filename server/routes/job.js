import express from 'express'
import { getJobs, newJob, getJob } from '../controllers/job.js'

const router = express.Router()

router.get('/get-job/:id', getJob)
router.get('/get-jobs', getJobs)
router.post('/new-job', newJob)
// router.patch('/:id', updateJob)
// router.delete('/:id', deleteJob)

export default router