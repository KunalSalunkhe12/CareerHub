import express from 'express'
import { getJobs, newJob, getJob, updateJobStatus } from '../controllers/job.js'

const router = express.Router()

router.get('/get-job/:id', getJob)
router.get('/get-jobs', getJobs)

router.post('/new-job', newJob)

router.put('/job-status/:id', updateJobStatus)
// router.delete('/:id', deleteJob)

export default router