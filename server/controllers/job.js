import Job from "../models/job.js";

export const getJob = async (req, res) => {
    const { id } = req.params;
    console.log(id)
    try {
        const job = await Job.findById(id);
        console.log(job)
        res.status(200).json(job);
    } catch (error) {
        console.log(error)
        res.status(404).json({ message: error.message });
    }
}

export const getJobs = async (req, res) => {
    try {
        const jobs = await Job.find();
        res.status(200).json(jobs);
    } catch (error) {
        console.log(error)
        res.status(404).json({ message: error.message });
    }
}

export const newJob = async (req, res) => {
    const job = req.body;
    try {
        const newJob = await Job.create(job);
        res.status(201).json(newJob);
    } catch (error) {
        console.log(error)
        res.status(409).json({ message: error.message });
    }
}