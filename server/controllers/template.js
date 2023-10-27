import Template from "../models/template.js";


export const postTemplate = async (req, res) => {
    const { uuid, status, subject, body } = req.body;

    try {
        const template = await Template.findOne({ status: status });

        if (template) {
            template.templates.push({ uuid: uuid, subject: subject, body: body });
            await template.save();
        }
        else {
            const newTemplate = await Template.create({ status: status, templates: [{ uuid: uuid, subject: subject, body: body }] });
            await newTemplate.save();
        }
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message });
    }
}