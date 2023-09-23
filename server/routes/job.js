import express from 'express'
import { getJobs, newJob } from '../controllers/job.js'

const router = express.Router()

router.get('/get-jobs', getJobs)
router.post('/new-job', newJob)
// router.patch('/:id', updateJob)
// router.delete('/:id', deleteJob)

export default router