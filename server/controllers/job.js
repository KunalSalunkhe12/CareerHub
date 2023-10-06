import Job from "../models/job.js";

export const getJob = async (req, res) => {
    const { id } = req.params;
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

export const updateJobStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    console.log(id, status)
    try {
        const updatedJob = await Job.findByIdAndUpdate(id, { status }, { new: true });
        console.log(updatedJob)
        res.status(200).json({ job: updatedJob, message: "Job status updated successfully" });
    } catch (error) {
        console.log(error)
        res.status(409).json({ message: "Could not update job status" });
    }
}