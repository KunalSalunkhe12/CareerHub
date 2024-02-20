import Job from "../models/job.js";

export const updateChecklist = async (req, res) => {
  const { jobId } = req.params;
  const { status, taskId, isCompleted } = req.body;

  try {
    const checklistStatus = status.toUpperCase();
    const job = await Job.findOne({ _id: jobId });

    job.checklist[checklistStatus].tasks = job.checklist[
      checklistStatus
    ].tasks.map((task) => {
      if (task.uuid === taskId) {
        task.is_completed = isCompleted;
      }
      return task;
    });

    await job.save();

    res.status(200).json(job.checklist);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
