import Guidance from "../models/guidance.js";

export const getGuidance = async (req, res) => {
    const { status } = req.params;
    try {
        const guidance = await Guidance.find({ status });
        res.status(200).json(guidance);

    }
    catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message });
    }
}

export const updateGuidance = async (req, res) => {
    const { status, taskId, isCompleted } = req.body;

    try {
        const guidance = await Guidance.findOne({ status });

        guidance.tasks.map(task => {
            if (task.uuid === taskId) {
                task.isCompleted = isCompleted;
            }
            return task;
        });

        await guidance.save();

        res.status(200).json(guidance);

    }
    catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message });
    }
}