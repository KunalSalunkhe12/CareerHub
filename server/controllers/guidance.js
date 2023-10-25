import Guidance from "../models/guidance.js";

export const getGuidance = async (req, res) => {
    const { status } = req.params;
    try {
        //get guidance based on status from mongodb
        const guidance = await Guidance.find({ status });
        res.status(200).json(guidance);

    }
    catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message });
    }
}