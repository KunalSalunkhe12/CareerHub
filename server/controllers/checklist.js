import Checklist from "../models/checklist.js";

export const getChecklist = async (req, res) => {
    try {
        const checklist = await Checklist.find();
        res.status(200).json(checklist);
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message });
    }
};

export const updateChecklist = async (req, res) => {
    const { status, taskId, isCompleted } = req.body;

    try {
        const checklist = await Checklist.findOne();

        const taskToUpdate = checklist[status].find((task) => task.uuid === taskId);

        taskToUpdate.is_completed = isCompleted;

        await checklist.save();

        res.status(200).json(checklist);
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message });
    }
};

