import { success } from "zod";
import Hire from "../models/Hire.js";
import hireSchema from "../validators/hireValidator.js";
import { sendHireMail } from "../services/mails/hireMail.js";

const createHire = async (req, res, next) => {
    try {
        const result = hireSchema.safeParse(req.body);

        if(!result.success){
            return res.status(400).json({
                success: false,
                message: "Please correct the submitted information",
                errors: result.error.flatten().fieldErrors,
            })
        }

        const hire = await Hire.create(result.data);

        await sendHireMail({
            name: result.data.name,
            email: result.data.email,
            phone: result.data.phone,
            plan: result.data.plan,
            projectType: result.data.projectType,
            budget: result.data.budget,
            projectDescription: result.data.projectDescription,
        })

        return res.status(201).json({
            success: true,
            message: "Your hire request has been received, you will be contacted soon!",
            hireId: hire._id,
        })
    } catch (error) {
        next(error);
    }
};

export default createHire;