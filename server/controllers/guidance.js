import Job from "../models/job.js";

export const getGuidance = async (req, res) => {
  const { status } = req.params;
  try {
    const guidance = await Guidance.find({ status });
    res.status(200).json(guidance);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

export const updateGuidance = async (req, res) => {
  const { jobId } = req.params;
  const { guidanceData } = req.body;

  console.log(jobId, guidanceData);

  try {
    const job = await Job.findOne({ _id: jobId });

    job.guidance[guidanceData.status.toUpperCase()] = guidanceData;

    await job.save();

    res.status(200).json(job);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};
