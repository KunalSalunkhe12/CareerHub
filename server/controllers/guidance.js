import Job from "../models/job.js";

export const updateGuidance = async (req, res) => {
  const { jobId } = req.params;
  const { status, taskId, isCompleted } = req.body;

  try {
    const job = await Job.findOne({ _id: jobId });

    console.log(job.guidance[status.toUpperCase()], "guidance");

    job.guidance[status.toUpperCase()].tasks = job.guidance[
      status.toUpperCase()
    ].tasks.map((task) => {
      if (task.uuid === taskId) {
        task.isCompleted = isCompleted;
      }
      return task;
    });

    await job.save();

    res.status(200).json(job.guidance[status.toUpperCase()]);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};
