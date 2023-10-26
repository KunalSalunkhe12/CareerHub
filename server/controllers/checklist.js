import Checklist from '../models/checklist.js';

export const getChecklist = async (req, res) => {
    try {
        const checklist = await Checklist.find();
        res.status(200).json(checklist);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}  